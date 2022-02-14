using Antagonism.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace Antagonism.Services
{
    public class DetectorService : IDetectorService
    {
        private AntagonismContext _context;
        private static HttpClient client = new HttpClient();

        public DetectorService(AntagonismContext context)
        {
            _context = context;
        }

        async public void CreateDetection(Detector detection)
        {
            if (detection == null)
                throw new ArgumentNullException(nameof(detection));

            var detectionText = detection.Description;

            var result = await CreateDetectionCall(detectionText);

            _context.Detections.Add(detection);
        }

        public void DeleteDetection(Detector detection)
        {
            if (detection == null)
                throw new ArgumentNullException(nameof(detection));

            _context.Detections.Remove(detection);
        }

        public IEnumerable<Detector> GetAllDetections()
        {
            return _context.Detections.ToList();
        }

        public Detector GetDetectionById(int detectionId)
        {
            return _context.Detections.FirstOrDefault(detection => detection.Id == detectionId);
        }

        public bool Save() => _context.SaveChanges() >= 0;

        public static async Task<HttpResponseMessage> CreateDetectionCall(string detectionText)
        {
            string postDetectionApi = "http://127.0.0.1:8085/predict";
            var myContent = JsonConvert.SerializeObject(detectionText);

            var buffer = System.Text.Encoding.UTF8.GetBytes(myContent);
            var byteContent = new ByteArrayContent(buffer);

            byteContent.Headers.ContentType = new MediaTypeHeaderValue("application/json");

            HttpResponseMessage response = await client.PostAsync(postDetectionApi, byteContent);
            response.EnsureSuccessStatusCode();

            return response;
        }

    }
}
