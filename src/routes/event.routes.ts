import {EventService} from "../services/event.service";
import {Router, Request, Response} from 'express';
import {Event} from "../models/event";

const router = Router();


router.get('/', async (req: Request, res: Response) => {
    try {
        let events = await EventService.getAllItems()
        res.status(200).send(events);
    } catch (e) {
        res.status(400).send({msg: e})
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    const eventId = req.params.id;
    try {
        const event = await EventService.getSingleItem(eventId);
        res.send(event);
    } catch (e) {
        res.status(400).send({msg: e})
    }
});

router.post('/', async (req: Request, res: Response) => {
    const event: Event = req.body
    try {
        const eventCreated = await EventService.createItem(event);
        res.send(eventCreated);
    } catch (e) {
        res.status(400).send({msg: e})
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    const taskId = req.params.id;
    try {
        await EventService.deleteEvent(taskId)
        res.send({message: 'Deleted!'}).status(204);
    } catch (e) {
        res.status(400).send({msg: e})
    }
});

router.put('/:id', async (req: Request, res: Response) => {
    const eventId = req.params.id;
    const event: Event = req.body

    try {
        const itemCreated = await EventService.updateEvent(eventId, event)
        res.send(itemCreated);
    } catch (e) {
        res.status(400).send({msg: e})
    }
});


export const eventRouter = router;
