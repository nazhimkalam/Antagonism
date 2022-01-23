
using System.Collections.Generic;
using Antagonism.Models;

namespace Antagonism.Services
{
    public interface IDetectorService
    {
        IEnumerable<Detector> GetAllDetections();
        User GetDetectionById(int id);
        void CreateDetection(Detector detection);
        bool Save();
        void UpdateDetection(Detector detection);
        void DeleteDetection(Detector detection);
    }
}
