
using System.Collections.Generic;
using Antagonism.Models;

namespace Antagonism.Services
{
    public interface IDetectorService
    {
        IEnumerable<Detector> GetAllDetections();

        Detector GetDetectionById(int id);

        void CreateDetection(Detector detection);

        bool Save();

        void DeleteDetection(Detector detection);
    }
}
