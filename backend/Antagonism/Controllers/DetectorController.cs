using AutoMapper;
using Antagonism.Models;
using Antagonism.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Antagonism.Dtos;

namespace Antagonism.Controllers
{
    [Route("api/detector")]
    [ApiController]
    public class DetectorController : Controller
    {
        private readonly IDetectorService _detectorService;
        private readonly IMapper _mapper;

        public DetectorController(IDetectorService detectorService, IMapper mapper)
        {
            _detectorService = detectorService;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Detector>> GetAllDetections()
        {
            var detections = _detectorService.GetAllDetections();
            return Ok(_mapper.Map<IEnumerable<DetectorReadDto>>(detections));
        }

        [HttpGet("{id}", Name = "GetDetectionById")]
        public ActionResult<DetectorReadDto> GetDetectionById(int id)
        {
            var detection = _detectorService.GetDetectionById(id);
            if (detection != null)
            {
                return Ok(_mapper.Map<DetectorReadDto>(detection));
            }
            return NotFound();
        }

        [HttpPost]
        public ActionResult<DetectorReadDto> CreateDetection(DetectorCreateDto createDetectorReq)
        {
            var detectorModel = _mapper.Map<Detector>(createDetectorReq);
            _detectorService.CreateDetection(detectorModel);
            _detectorService.Save();

            var resultDetection = _mapper.Map<DetectorReadDto>(detectorModel);

            return CreatedAtRoute(nameof(GetDetectionById), new { Id = resultDetection.Id }, resultDetection);
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteDetction(int id)
        {

            var detectionToDelete = _detectorService.GetDetectionById(id);
            if (detectionToDelete == null)
            {
                return NotFound();
            }

            _detectorService.DeleteDetection(detectionToDelete);
            _detectorService.Save();

            return Ok("Deleted Successfully object with id = " + detectionToDelete.Id);
        }

    }
}
