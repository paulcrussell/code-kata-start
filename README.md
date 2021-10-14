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

# Minesweeper

Difficulty: Easy

## Problem Description

Have you ever played Minesweeper? It’s a cute little game which comes within a certain Operating System whose name we can’t really remember. Well, the goal of the game is to find all the mines within an MxN field. To help you, the game shows a number in a square which tells you how many mines there are adjacent to that square. For instance, take the following 4x4 field with 2 mines (which are represented by an * character):

```
*...
....
.*..
....
```

The same field including the hint numbers described above would look like this:

```
*100
2210
1*10
1110
```

You should write a program that takes input as follows:

The input will consist of an arbitrary number of fields. The first line of each field contains two integers n and m (0 < n,m <= 100) which stands for the number of lines and columns of the field respectively. The next n lines contains exactly m characters and represent the field. Each safe square is represented by an “.” character (without the quotes) and each mine square is represented by an “*” character (also without the quotes). The first field line where n = m = 0 represents the end of input and should not be processed.

Your program should produce output as follows:

For each field, you must print the following message in a line alone:

Field #x:

Where x stands for the number of the field (starting from 1). The next n lines should contain the field with the “.” characters replaced by the number of adjacent mines to that square. There must be an empty line between field outputs.

## Clues

As you may have already noticed, each square may have at most 8 adjacent squares.

## Suggested Test Cases

This is the acceptance test input:

```
4 4
*...
....
.*..
....
3 5
**...
.....
.*...
0 0
```

and output:

```
Field #1:
*100
2210
1*10
1110

Field #2:
**100
33200
1*100
```
