import { Router, Request, Response } from 'express';
import { getAll, getByid, add, update, exclude } from '../models/userModel';

const router: Router = Router();

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await getByid(id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({erro: "Deu ruim na Api"})
  }
});

router.get('/', async (_req: Request, res: Response) => {
  try {
    const result = await getAll()
    return res.status(200).json(result)
  } catch (error) {
    return res.status(500).json({ erro: "Deu ruim na API..." })
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const { nome, email, password, hora_de_criacao, hora_de_atualizacao } = req.body
    await add({ nome, email, password, hora_de_criacao, hora_de_atualizacao })
    return res.status(201).json({ message: "Criado com Sucesso!" })
  } catch (error) {
    return res.status(500).json({ erro: "Deu ruim na API..." })
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { nome, email, password } = req.body
    await update({ id, nome, email, password })
    return res.status(201).json({ message: "Atualizado com Sucesso!" })
  } catch (error) {
    return res.status(500).json({ erro: "Deu ruim na API..." })
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    await exclude(id)
    return res.status(200).json({ message: "User deletado com sucesso!" })
  } catch (error) {
    return res.status(500).json({ erro: "Deu ruim na API..." })
  }
});

export const userController: Router = router;
