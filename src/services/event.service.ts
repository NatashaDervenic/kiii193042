import {Event, eventModel} from "../models/event";

export const EventService = {
    async createItem(event: Event): Promise<Event> {
        return await eventModel.model.create(event);
    },
    async getAllItems(): Promise<Event[]> {
        return await eventModel.model.find();
    },
    async getSingleItem(id:string): Promise <Event | undefined | null> {
        return await eventModel.model.findOne({_id: id});
    },
    async deleteEvent(id:string): Promise<any> {
        return await eventModel.model.deleteOne({_id: id});
    },
    async updateEvent(id:string, event:Event): Promise<any> {
      return await eventModel.model.updateOne({_id: id}, event);
    }
}
