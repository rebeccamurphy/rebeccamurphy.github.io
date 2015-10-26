(function(){
	var projects= angular.module('projects',[]);

    projects.controller('projectsController', function($scope) {
        $scope.message = 'projects';
       
        function defineProjects(numRows){
            var arr =[];
            for (var i=0; i<numRows; i++)
                arr[i] = [];           
            
            //row 1 of projects
           
            arr[0].push({name: "MysteriOSBloop", date:"Fall 2014", details:"An interrupt-driven operating system (and shell) written in TypeScript that runs user programs written in 6502a. Utilizes the HTML5 Canvas for shell emulation, and HTML5 localStorage as a persistent file system. Features three types of scheduling, file recovery, and swapped virtual memory.",
                img:"/imgs/thumbnails/os.png", code:"https://github.com/rebeccamurphy/TSOS-2014", demo:"http://rebeccamurphy.github.io/TSOS-2014/"}
            );
            arr[0].push({name:"Bloop Compiler", date:"Spring 2015", details:"A compiler for programs that run on MysteriOSBloop written in TypeScript.",
                    img:"/imgs/thumbnails/compiler.png", code: "https://github.com/rebeccamurphy/TS-Compiler", demo:"http://rebeccamurphy.github.io/TS-Compiler"});
            arr[0].push({name:"Chess-AI", date:"Fall 2014", details:"Our strategy used minimax with alphabeta pruning. We use prune move that would put kings in check and we sort our move list to maximize pruning. There are serveral extra checks in our alphabeta function. One that says if an move can take the opponents king, return turn that move without looking at anything else. Another check is for if you AI gets caught it a move loop. The last 4 moves sent to the server are stored in an array, we check if the new move found my alphabeta is in the cache. If it is, we redo alphabeta with that move pruned out of the tree.",
                    img:"/imgs/thumbnails/chess-ai.png", code:"https://github.com/rebeccamurphy/Chess-AI"});                   
            arr[0].push({name:"Chessboard Visualizer", date:"Fall 2013", details:"A 3D model chessboard made with Javascript, using the WebGL and Three.js libraries. The webpage would receive a game in the form of a json object, and animate the pieces in turn. The viewer has full control of the camera, animation speed, and appearance options. ",
                    img:"/imgs/thumbnails/cg-chess.png", code:"https://github.com/rebeccamurphy/CG-ChessBoard", demo:"http://rebeccamurphy.github.io/CG-ChessBoard/"});
            
            // row 2 of projects
            arr[1].push({name:"Egyptian Rat Screw Card Game", date:"Spring 2014", details:"A two player, one human and one AI, multithreaded playing card game revolving around reaction time. Players can customize: the AI’s difficulty, the game pace, and the number of decks in play.",
                    img:"/imgs/thumbnails/cardgame.png", code:"https://github.com/rebeccamurphy/EgyptianRatScrew"});
            arr[1].push({name:"Rubik's Cube Visualizer", date:"Fall 2013", details:"The webpage takes in a cube state and a solution, then it animates the turns of the solution. Made with WebGL.",
                    img:"/imgs/thumbnails/cube.png", code:"https://github.com/rebeccamurphy/CG-RubiksCube", demo:"http://rebeccamurphy.github.io/CG-RubixCube" });
            arr[1].push({name:"Huffman Codes", date:"Spring 2015", details:"A simple huffman encoder and decoder in Java.",
                    img:"", code:"https://github.com/rebeccamurphy/HuffmanCodes", demo:""});
            arr[1].push({name:"Asylum-Jam-2013", date:"", details:"Sonny Jim - Adventure Through Hyde Park is the classic text-based adventure reimagined for the web. I was the lead frontend designer and developer. IndieGames.com recognized us for this game! (http://indiegames.com/2013/10/adhd_arcade_creeps_epidemics_n.html)",
                    img:"/imgs/thumbnails/sonny.png", code:"https://github.com/CarrotIsland/Asylum-Jam-2013", demo:"http://carrotisland.nicklaroux.com/sonnyjim/"});
            
            //row 3 of projects
            arr[2].push({name:"ProgrammingOfThePast", date:"Spring 2014", details:"Caesar Cipher in seven difference languages, half functional half object orientated.",
                    img:"", code:"https://github.com/rebeccamurphy/ProgrammingOfThePast",demo:""});

            return arr;
        };
        $scope.projects =  defineProjects(3);
    });
})();