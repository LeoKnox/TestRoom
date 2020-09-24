using System.Collections.Generic;
using WebApplication2.Models;

namespace WebApplication2.Data
{
    public interface IRoomService
    {
        List<Room> GetAllRooms();
        Room GetRoomById(int roomId);
        void UpdateRoom(int roomId, Room room);
        void DeleteRoom(int roomId);
        void AddRoom(Room rooom);
    }
}