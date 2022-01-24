using Antagonism.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Antagonism.Services
{
    public class DetectorService : IDetectorService
    {
        private AntagonismContext _context;

        public DetectorService(AntagonismContext context)
        {
            _context = context;
        }

        public void CreateDetection(Detector detection)
        {
            // here is where we also do the detection with the model
            if (detection == null)
                throw new ArgumentNullException(nameof(detection));

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

      
    }
}
