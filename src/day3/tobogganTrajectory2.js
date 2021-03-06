const findNextCoordinate = ([x, y], [dx, dy]) => [x + dx, y + dy];

const isTreeOnCurrentCoordinate = ([x, y], path) => {
  const row = path[y] || '.'
  return row[x % row.length] === '#'
};

const traverse = function (path, delta) {
  const pathStructure = path.split('\n')
  let currentCoordinate = [0, 0]
  let numOfTrees = 0
  for (let i = 0; i < pathStructure.length - 1; i++) {
    currentCoordinate = findNextCoordinate(currentCoordinate, delta)
    if (isTreeOnCurrentCoordinate(currentCoordinate, pathStructure))
      numOfTrees++
  }
  return numOfTrees;
}

const main = () => {
  /*const path = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`*/

  const path = `......#...........#...#........
.#.....#...##.......#.....##...
......#.#....#.................
..............#.#.......#......
.....#.#...##...#.#..#..#..#..#
.......##...#..#...........#...
.......#.##.#...#.#.........#..
..#...##............##......#.#
.......#.......##......##.##.#.
...#...#........#....#........#
#............###.#......#.....#
..#........#....#..#..........#
..#..##....#......#..#......#..
........#......#......#..#..#..
..#...#....#..##.......#.#.....
.....#.#......#..#....#.##.#..#
......###.....#..#..........#..
.#................#.#..........
.........#..#...#......##......
##...#....#...#.#...#.##..#....
...##...#....#.........###.....
.#.#....#.........##...........
....#.#..#..#...........#......
..#..#.#....#....#...#.........
..........##.....#.##..........
..#.#....#..##......#.#.....##.
..#...#.##......#..........#...
......#....#..#.....#.....#...#
#.#...##.#.##.........#..#.....
...#.#.#.........#.....#.#.#...
..#.........#...............#..
#..##.....#.........#....#.....
...#....##..##...........##..#.
......##.................#.#...
##.......#....#.#.#.....#......
....#.#...#.................##.
#...#.........##.....#.........
#....#.###..#.....##.#....#....
#..#....#...#....#.#.#.........
.......#...........#....#.....#
#...#.............#........#...
.......#.....#...#..#.........#
.##.....##.....##.......#......
....##...##.......#..#.#.....#.
.##.........#......#........##.
.......#...#...###.#..#........
..#..###......##..##...........
.#..#......##..#.#.........#...
...#.......#........#...#.#....
...#....#..#....#.....##.......
............#......#..........#
.#.......#......#.#....#..#.#..
##.........#.#.#..........#....
....##.....#...................
.......#..#........#...........
....##.#..#......###.......#...
....#....#...#.#......#...#...#
.......#.....##..#....#...#....
#...#........#.........#..##...
...........##.........#.#...#..
....................#....#.##..
.#..#..#.........#....#..#..##.
......................#........
..###....#.......#.....###.##..
......#......#.......#.....#..#
.....#...#.##...#......#....#..
.....#.....##.............#....
....#......##..#....#.......#..
.##....#..##......###....#..#..
...###.#.............##...#.#..
.....#.....#.....#...#..#.#....
..#.#.....###......#.......#...
..........#.##......#.........#
..##..#.......................#
........#......#............#..
#..#..#..#.#......#..#....#....
...##......#.............#....#
...........#..#..##.......#....
.....#.........#.#..#..........
##...#.......#.#....#..#..#....
#.#.#...........#.##.#.#..###..
#..#...........#.........##....
............#.#..............#.
.#....#....##.#...........#..#.
....#...#..#...#....#....#.....
....#....#...#..#......#.......
.#.#.........#.......#.##......
.#..##...#........#...........#
##...#..#...#...#.....#...#....
....###.#..#.......##.#..#...#.
...##.......####...##.#........
#....#....#.#............#..#..
#.#.#...#...................##.
##......#...........#..........
#..#..#....#.#...#......#......
.##...#.....#...#........#.....
..#............#..............#
###........#..#....#...#......#
###..##......#.##...........#..
........#......#..#.....#......
...#..........#..#...........#.
....#..#..#....#........#....#.
.#.................#####..##..#
.....#...##..#..........#.##...
..#..............#...####......
.....#.##..................#.#.
...#.#..#..#........#..........
...........#....#.#..#.........
.....##.......#......#..#.#.#..
...#.............##...#........
...............#.......##.##.##
.....#........#........#.#..#..
...#..#.........#...##...###...
...#.#.............###.#.....#.
.#..........#......###.#.#.....
....##..##.............###.....
..#..#.#...##...#.......##.....
..........###........#.....#.#.
#.#....#..#..#......#...#...#..
.........#......##.......#.#..#
...#.....#.........##..#..#....
.....##.#..##.##..##...........
...#.#.##....#..#..#......#..#.
#....#....#.............#...##.
#......#..#.####.#.##.#....##..
##.#.#....##..................#
.....##......#.......##.......#
..#......#.#..#...##......##...
..#....##....#.........#..##...
.###.....#....##...........#...
.........#......#.#........#...
...#...#..#.#....######.#..#...
###......#.#.#.........##.#....
.....#...#.........#...#.......
....#.............#.#.........#
..##...#...#.......#......#....
.....#...#.#...#...#..#........
.#......#......................
...###..#..#....#...##.#.......
.#.#.....##...#...#.....#...##.
.....###..###....##............
.....##....#..#.....#.##.......
#........#.........#...#..#....
...#.#.........#..#.......#.#..
....#.#....##.....#..........#.
.#..#....#..#.#..#..#.........#
#...#....#..............#......
.........#.....#.##...##...###.
.....#....##............#..#...
.....#.#...........#..#....#...
.#..........#...#......#.....#.
.#...........#.....#..#........
..............#......##...#..#.
...#.........#..#....#..##...##
..##...#..................#....
#.....#.................#......
...#......#..#..........#.#....
......#..#.....#.....##...#..#.
......#........#..........#....
...##.##....#..##.#..........#.
..........#..#.#.##............
..##........................#..
.....#.#.#......#....#....##...
#....#.........#........#......
.##.......#...#...#........##..
....##......#....#.#..........#
..#.......#..............#.....
.....#......#.#...#..#.#.#....#
.....#..#........#.##.##.......
##........#..........#.........
.....#..##....#.#......###..##.
#.#...##.........#.#.....#..#..
#....#.#...#........#.....#..#.
........................#......
....###......#............#...#
...#..##......#..##.........#..
.............#...#......#..#..#
....#......#....#...........#..
..#.#.####.#.....##........#..#
#..#...#..#..#.......#.#..#....
..#..#..#....#.#.........##..#.
.......#......#.#............#.
...#.............#.#.....#.....
...#.#.........##...#.#.......#
........#...#...........##...#.
..........#....#......#....##..
..........#...........#........
...#..#...#..........#......#..
......#......#....#.....#..#.#.
........##.................#..#
.#........#.#...........#......
#...#........#.#.#.....#.#.#...
.........#........#..#..#....#.
##........#..........#....#..#.
.#.##...........#..#.#..##....#
.......#.#....#..#......#......
..#.....#........##..#......###
..#...#..................#....#
......#...#..#.##.......#......
........#...#.#................
.........#............#........
..#.....##....#.#..##..........
#.....#..........#....#........
....#.#...#...##....#.....##...
..#.#.......#.............#...#
...##..............#......#....
#......#...#................##.
.#.#...#.#..#..................
...##.......#...........#.#.#..
#......#.#.#........#.##...####
.......#..#.#.........#.#.##..#
..............#....#.........#.
...........#.#..#....##......#.
#.............#...##..#.......#
.........#............#...#.##.
.......#.........#.#.....#..#..
........................#.#.##.
#......#.#......#.........#....
...#.......#.......#.....#.....
#..#....#................#...#.
........#.#..##......#.........
#..#...##....##....##.........#
.......#...#...###.............
#.#..#........#.#.#............
#.....#........##.........#.#..
.#..........#....#.#....###....
.#.....#...#.#........#..#.##..
...#.##......#..#.............#
..##..#.#...................#..
.....#....#...#.#...#...#......
.....#..#.#....#.#.............
#.#....#.#.##..###..........#..
........#.#.............#..#...
.........#.......#.............
.##.#............##...#........
......#................#.......
...............#..#...........#
...#.......#...#.##.....#....#.
##..##..#..........#...........
.##.#.......#...#..#...#...#...
....#..#...........#....#.##...
.#........#........#....#......
.......#...#.##.#..#.#..#......
.#..#......#....#...##....#.#..
......#...##.#.....##.###.....#
.#....#..#......#...#.#.....#..
#............#....##...##.##...
#...#.#....#...#.......##...##.
#...........#.##..#....#.....#.
...#..#...#.........#.......#..
.#....#.....#............#.#..#
.#.....#.#...#.#....##......###
..#..#.#.#...#..#.............#
...#...#..#....#........#...##.
.......#.....#...##...........#
#.##.................#...##...#
..............##........#.....#
............#...#..#.......#.#.
#.#.....#.........#...#......#.
#.###..#......#..#..#...#.....#
.....#.......#.................
........#..#......#.#...#......
#.......#..#........#...#..#...
..#...#.......##.............#.
#.......#.......##...#.........
.........#....#.#..##.....#...#
..#.....#.#.......#....#.......
...#.......#.....#..##.#..#....
....#.......#.#.#..............
.#..#......#........#.#..##..##
....#...#.##.#...#....##...#...
#..##..#.....#.......#.........
....#..#..#.#............#.....
#.......##...##..##............
...............................
....#.......#.##...#.....#.#...
...#........#....#.#..#..#.....
##.......#.....##.#.#....#....#
#.............#...........#.##.
#...........#.#..........#.....
#..#....#....#.#.........#.#...
......#.#.#..#.#.#.............
...#.....#........##....#......
..#...#...#.#.......#......#...
.##........#...#..#..........#.
..#...........#..##.....##.....
............#..#.#...#.....#...
..........#....##.......#......
....#....#.................#..#
....#...............#.........#
..#.#...#......#..........##...
.....#...........#.........#..#
.......#.....##.....#.#........
.#.#..........#....#...........
.#..##....#........#....#......
....#.#..#.......#..#.........#
..#....#.....#......#..#.......
......#........#.......#...#.#.
.......#.......#....#.....##...
....##........#..#...#.#..#...#
.#......#...........##....#....
##....##......#.......#.......#
.##....#.##......#.......##..#.
...#..#.#.#.......#..#.###.....
..........##....#..#.##........
...#........###.#..#........#..
.....#....#..##....#.....#....#
#..........#..........#.#....#.
..#....#.....#..............#..
#..................#......#.##.
.#...#.#.....#.........##......
...#...........#.....#......#..
......#.....#.#..##......##....
...#....###..#.....#..#..##..##
......#.......##..#..#.........
#..#.#....#.#..#..........##.#.
..#..#..##..#.#.#.#.....#......
..#.#...#..#.....###.#.........
##.#.#......#........#.####....
.............#..#..#....#......
...##..........#.......#.#....#
..#.....................#......
..#..#...##...#.##........#....`


  const deltas = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]]
  const numOfTrees = deltas.map(delta => traverse(path, delta))
  let result = numOfTrees.reduce((product, num) => product * num);
  console.log(result)
}

main()
