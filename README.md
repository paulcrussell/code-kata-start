# Conway - Game of Life

Difficulty: Medium

This Kata is about calculating the next generation of Conway’s game of life, given any starting position. See http://en.wikipedia.org/wiki/Conway%27s_Game_of_Life for background.

You start with a two dimensional grid of cells, where each cell is either alive or dead. In this version of the problem, the grid is finite, and no life can exist off the edges. When calcuating the next generation of the grid, follow these rules:

   1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
   2. Any live cell with more than three live neighbours dies, as if by overcrowding.
   3. Any live cell with two or three live neighbours lives on to the next generation.
   4. Any dead cell with exactly three live neighbours becomes a live cell.

You should write a program that can accept an arbitrary grid of cells, and will output a similar grid showing the next generation.

## Clues
The input starting position could be a text file that looks like this:

Generation 1:
```
4 8
........
....*...
...**...
........
```

And the output could look like this:

Generation 2:
```
4 8
........
...**...
...**...
........
```


## Suggested Test Cases
Make sure you have enough coverage of edge cases - where there are births and deaths at the edge of the grid.

# Reversi

Difficulty: Medium

## Problem Description

Reversi is a board game for two players. More information can be found on Wikipedia en.wikipedia.org/wiki/Reversi . This Kata is to write a program that takes a current board position together with information about whose turn it is, and returns a list of the legal moves for that player. A move is only legal if it results in at least one of the opponent’s counters being flipped.

## Suggested Test Cases

```
........
........
........
...BW...
...WB...
........
........
........
B
```

(A “.” indicates an empty square. A “B” indicates a black piece and a “W” represents a white piece. The trailing “B” indicates that it is black’s turn)

You could either output the possible moves as co-ordinates (columns labelled A - H, rows labelled 1 - 8 starting from top left hand corner) like this: [C5, D6, E3, F4] or graphically like this:

```
........
........
....0...
...BW0..
..0WB...
...0....
........
........
B
```
