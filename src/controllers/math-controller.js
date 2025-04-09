import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function addition(req, res, next) {
  try {
    const { a, b } = req.body;
    if (typeof a !== 'number' || typeof b !== 'number') {
      return res.status(400).json({ error: 'Inputs must be numbers' });
    }
    const result = a + b;
    await prisma.operation.create({
      data: { type: 'addition', input: JSON.stringify({ a, b }), result: result.toString() },
    });
    res.json({ result });
  } catch (err) {
    next(err);
  }
}

export async function factorial(req, res, next) {
  try {
    const number = parseInt(req.params.number);
    if (isNaN(number) || number < 0) return res.status(400).json({ error: 'Invalid input' });
    let result = 1;
    for (let i = 2; i <= number; i++) result *= i;
    await prisma.operation.create({
      data: { type: 'factorial', input: number.toString(), result: result.toString() },
    });
    res.json({ result });
  } catch (err) {
    next(err);
  }
}

export async function fibonacci(req, res, next) {
  try {
    const count = parseInt(req.params.count);
    if (isNaN(count) || count < 1) return res.status(400).json({ error: 'Invalid input' });
    const result = [0];
    if (count > 1) result.push(1);
    for (let i = 2; i < count; i++) {
      result.push(result[i - 1] + result[i - 2]);
    }
    await prisma.operation.create({
      data: { type: 'fibonacci', input: count.toString(), result: JSON.stringify(result) },
    });
    res.json({ result });
  } catch (err) {
    next(err);
  }
}

export async function square(req, res, next) {
  try {
    const number = parseFloat(req.params.number);
    if (isNaN(number)) return res.status(400).json({ error: 'Invalid input' });
    const result = number * number;
    await prisma.operation.create({
      data: { type: 'square', input: number.toString(), result: result.toString() },
    });
    res.json({ result });
  } catch (err) {
    next(err);
  }
}
