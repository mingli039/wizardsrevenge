var load = function(){
     function require(a,b=true){var c;c=b===!0?".js":"";var d=document.createElement("script");d.src=a+c,d.type="text/javascript",document.head.appendChild(d)}
    //https://code.jquery.com/jquery-3.1.0.min
    require("https://code.jquery.com/jquery-3.1.0.min");

    function vert(){   
        $("#thing").hide();
        $("#menu").hide();
        $("#logo_img").hide();
        $("br").hide();
        $("span").hide();

        document.body.style.backgroundColor = "#000";
        document.body.style.margin = "0px";

        var c = document.getElementsByTagName("canvas")[0];
        c.style.borderRadius = "0px";
        c.style.margin = "auto";
        c.style.position = "absolute";
        c.style.left = "0%";
        c.style.right = "0%";
        c.style.bottom = "0%";
        c.style.top = "0%";
        c.style.height = "";
        c.style.width = "63.93362591508053%"; 
    }

    function revert(){
        $("#thing").fadeIn();
        $("#menu").fadeIn();
        $("#logo_img").fadeIn();
        $("br").fadeIn();
        $("span").fadeIn();

        document.body.style.backgroundColor = "#FFF";
        var c = document.getElementsByTagName("canvas")[0];
        c.style.borderRadius = "7px";
        c.style.margin = "";
        c.style.position = "";
        c.style.left = "";
        c.style.right = "";
        c.style.top = "";
        c.style.bottom = "";
        c.style.height = '58.59375%';
        c.style.width = '43.923865300146414%';
    }
    var full_screen = false;
    window.addEventListener('keyup', function(evt){
        if(evt.keyCode == 69){ //keyCode 69 = E
            if(full_screen){
                revert();
                full_screen = false;
            } else {
                vert();
                full_screen = true;
            }
        }
    })
    
    var colors = ["#55bbaa", "#99aacc", "#00ccff", "#1fcc3e", "#24809e", "#3f9e51", "#49c6e5", "#2Ceaa3", "#7cfef0", "#a9ddd6"];
    var rc = colors[Math.round(Math.random()*(colors.length-1))];

    var WIDTH = 268;
    var HEIGHT = 698;
    var canvas;
    var ctx;

    var r = 18.3684211;
    var pi = Math.PI;

    var main = function(){
        canvas = document.getElementById('thing');
        ctx = canvas.getContext('2d');
        canvas.width = WIDTH;
        canvas.height = HEIGHT;

        draw();
    }

    var draw = function(){

        //Row 1 => 7
        for(var i = 0; i < 7; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), r, r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }

        //Row 2 => 6
        for(var i = 0; i < 6; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), (r*3), r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }

        //Row 3 => 5
        for(var i = 0; i < 5; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), (r*5), r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }

        //Row 4 => 4
        for(var i = 0; i < 4; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), (r*7), r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }

        //Row 5 => 5
        for(var i = 0; i < 5; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), (r*9), r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }

        //Row 6 => 6
        for(var i = 0; i < 6; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), (r*11), r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }

        //Row 7 => 2
        for(var i = 0; i < 2; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), (r*13), r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }

        //Row 8 => 5
        for(var i = 0; i < 5; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), (r*15), r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }

        //Row 9 => 6
        for(var i = 0; i < 6; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), (r*17), r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }


        //Row 10 => 6
        for(var i = 0; i < 6; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), (r*19), r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }

        //Row 11 => 4
        for(var i = 0; i < 4; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), (r*21), r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }

        //Row 12 => 7
        for(var i = 0; i < 7; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), (r*23), r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }

        //Row 13 => 6
        for(var i = 0; i < 6; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), (r*25), r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }

        //Row 14 => 5
        for(var i = 0; i < 5; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), (r*27), r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }

        //Row 15 => 6
        for(var i = 0; i < 6; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), (r*29), r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }

        //Row 16 => 4
        for(var i = 0; i < 4; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), (r*31), r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }

        //Row 17 => 5
        for(var i = 0; i < 5; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), (r*33), r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }

        //Row 18 => 5
        for(var i = 0; i < 5; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), (r*35), r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }

        //Row 19 => 2
        for(var i = 0; i < 2; i++){
            ctx.beginPath();
            ctx.arc(WIDTH-r-(2*r*i), (r*37), r, 0, 2 * pi);
            ctx.fillStyle = rc;
            ctx.fill();
            rc = colors[Math.round(Math.random()*(colors.length-1))];
        }
    }

    main();
    $("#menu").hide().delay().fadeIn(200);
    $("#logo_img").hide().delay(250).fadeIn(200);
    $("#mcnt").hide().delay(500).fadeIn(200);
    $("section").hide().delay(750).fadeIn(200);
}

$(document).ready(load);

window.onload = function wizard() {

    var firstTime = true;

        //Music
        function start_music(){
            var music = document.getElementById('music')

            music.play();
        }

        function stop_music(){
            var music = document.getElementById('music')

            music.pause();
        }

        var start_music_dom = document.getElementById('start_music');
        var stop_music_dom = document.getElementById('stop_music');

        start_music_dom.addEventListener('click', start_music);
        stop_music_dom.addEventListener('click', stop_music);

    function start(){
        //Music
        var bg_music = new Audio();
        bg_music.src = 'fade.mp3';
        bg_music.autoplay = true;
        bg_music.loop = true;

        function start_music(){
            bg_music.play();
        }

        function stop_music(){
             bg_music.pause();
        }

        var start_music_dom = document.getElementById('start_music');
        var stop_music_dom = document.getElementById('stop_music');

        start_music_dom.addEventListener('click', start_music);
        stop_music_dom.addEventListener('click', stop_music);

        firstTime = false;

        //Sounds
        var ching = new Audio();
        ching.src = "Sounds/ching.wav";
    
        var helicopter = new Audio();
        helicopter.src = "Sounds/helicopter.wav";
    
        var lazer_sound = new Audio();
        lazer_sound.src = "Sounds/lazer.wav";
    
        //stats
        var level = 1;
        var health = 15;
        var maxhealth = 15;
        var attack = 5;
        var exp = 0;
        var maxexp = 10;
        var rank = 1;
        var speed = 3;

        //Count enemies in the room
        var count = 0;

    var level1 = function(){
        //Items
        var healthBoxImg = new Image();
        healthBoxImg.src = 'health.png';

        var expBoxImg = new Image();
        expBoxImg.src = 'exp.png';

        var attackBoostImg = new Image();
        attackBoostImg.src = 'attack.png';

        var speedBoostImg = new Image();
        speedBoostImg.src = 'speed.png';

        var healthBox = {
            x: -100,
            y: -100,
            side: 32,

            vannish: function(){
                this.x = 950;
            },

            draw: function(){
                ctx.drawImage(healthBoxImg, this.x, this.y, this.side, this.side);
            }
        };

        var expBox = {
            x: -100,
            y: -100,
            side: 32,

            vannish: function(){
                this.x = 950;
            },

            draw: function(){
                ctx.drawImage(expBoxImg, this.x, this.y, this.side, this.side);
            }
        };

        var expBox2 = {
            x: -100,
            y: -100,
            side: 32,

            vannish: function(){
                this.x = 950;
            },

            draw: function(){
                ctx.drawImage(expBoxImg, this.x, this.y, this.side, this.side);
            }
        };

        var expBox3 = {
            x: -100,
            y: -100,
            side: 32,

            vannish: function(){
                this.x = 950;
            },

            draw: function(){
                ctx.drawImage(expBoxImg, this.x, this.y, this.side, this.side);
            }
        };

        var attackBoost = {
            x: -100,
            y: -100,
            side: 32,

            vannish: function(){
                this.x = 950;
            },

            draw: function(){
                ctx.drawImage(attackBoostImg, this.x, this.y, this.side, this.side);
            }
        };

        var speedBoost = {
            x: -100,
            y: -100,
            side: 32,

            vannish: function(){
                this.x = 950;
            },

            draw: function(){
                ctx.drawImage(speedBoostImg, this.x, this.y, this.side, this.side);
            }
        };

        //Text Objects

        var levelw = {
            draw: function(){
                ctx.fillStyle = 'white';
                ctx.font = "13.93px Arial";
                if(level === 19){
                    ctx.fillText('Level: ' + "End" + " ", 4, 15);
                } else {
                    ctx.fillText('Level: ' + level + " ", 4, 15);
                };
            }
        };


        var healthw = {
            draw: function(){
                ctx.fillStyle = 'white';
                ctx.font = "13.93px Arial";
                ctx.fillText('Health: ' + health + " " + "/" + " " + maxhealth + " ", 79, 15);
            }
        };


        var attackw = {
            draw: function(){
                ctx.fillStyle = 'white';
                ctx.font = "13.93px Arial";
                ctx.fillText('Attack: ' + attack, 198, 15);
            }
        };

        var speedw = {
            draw: function(){
                ctx.fillStyle = 'white';
                ctx.font = "13.93px Arial";
                if(speed < 12){
                    ctx.fillText('Speed: ' + speed, 277, 15);
                } else {
                    ctx.fillText('Speed: MAX', 277, 15);
                }
            }
        };

        var expw = {
            draw: function(){
                ctx.fillStyle = 'white';
                ctx.font = "13.93px Arial";
                ctx.fillText('Exp: ' + exp + " " + "/" + " " + maxexp, 380, 15);
            }
        };

        var rankw = {
            draw: function(){
                ctx.fillStyle = 'white';
                ctx.font = "13.93px Arial";
                ctx.fillText('Rank: ' + rank, 484, 15);
            }
        };
        
        //Epilogue
        var congrats = {
            x: 300,
            y: null,
            speed: 0.6,
            
            update: function(){
                this.y += this.vel.y;
            },
            
            draw: function(){
                ctx.fillStyle = 'white';
                ctx.font = '44px Arial';
                ctx.textAlign = "center";
                ctx.fillText('Congratulations!', this.x, this.y);
            }
        };
        
        var vic = {
            x: 300,
            y: null,
            speed: 0.6,
            
            update: function(){
                this.y += this.vel.y;
            },
            
            draw: function(){
                ctx.fillStyle = 'white';
                ctx.font = '44px Arial';
                ctx.textAlign = "center";
                ctx.fillText('You have defeated Xiang Qi!', this.x, this.y);
            }
        };
        
        var av = {
            x: 300,
            y: null,
            speed: 0.6,
            
            update: function(){
                this.y += this.vel.y;
            },
            
            draw: function(){
                ctx.fillStyle = 'white';
                ctx.font = '24px Arial';
                ctx.textAlign = "center";
                ctx.fillText('Press R to restart', this.x, this.y);
            }
        };

        // Canvas Variables
        WIDTH = 600;
        HEIGHT = (WIDTH/12)*9;
        game;
        ctx;

        // Movement Variables
        var Keystate;
        var up = 38;
        var down = 40;
        var left = 37;
        var right = 39;
        var space = 32;
        var mystery = 17;
        var hack = 80;
        var esc = 27;
        var restart = 82;
        
        //Fade in Fade out Transition objects
        var fadein_block = {
            x: 0,
            y: 0,
            width: WIDTH,
            height: HEIGHT,
            transition: false,
            ga: 0,
            
            draw: function(){
                if(this.transition === true){
                    this.ga += 0.45;
                    ctx.fillStyle = "rgba(0, 0, 0, " + this.ga + ")";
                    ctx.fillRect(this.x, this.y, this.width, this.height);
                    
                    if(this.ga > 1){
                        this.transition = false;
                        fadeout_block.transition = true;
                        this.ga = 0;
                        this.collision = false;
                    }
                }
            }
        };
        
        var fadeout_block = {
            x: 0,
            y: 0,
            width: WIDTH,
            height: HEIGHT,
            transition: false,
            ga: 1,
            
            draw: function(){
                if(this.transition === true){
                    this.ga -= 0.0185;
                    ctx.fillStyle = "rgba(0, 0, 0, " + this.ga + ")";
                    ctx.fillRect(this.x, this.y, this.width, this.height);
                    
                    if(this.ga < 0){
                        this.transition = false;
                        this.ga = 1;
                    };
                }
            }
        };
        
        var fade_block = {
            x: 0,
            y: 0,
            width: WIDTH,
            height: HEIGHT,
            transition: false,
            ga: 0,
            
            draw: function(){
                if(this.transition === true){
                    this.ga += 0.005;
                    ctx.fillStyle = "rgba(0, 0, 0, " + this.ga + ")";
                    ctx.fillRect(this.x, this.y, this.width, this.height);
                }
            }
        };

        // Objects
        
        var spell_ball = new Image();
        spell_ball.src = "spell_strip10.png";
        
        var wizard = new Image();
        wizard.src = 'wiz.png';

        var player = {
            x: null,
            y: null,
            width: 38,
            height: 42,
            speed: speed,
            bool: false,

            update: function(){
                //Test Count
                if(ai6.count > 2){
                    expBox2.x = Math.random()*WIDTH;
                    expBox2.y = Math.random()*HEIGHT;
                    expBox3.x = Math.random()*WIDTH;
                    expBox3.y = Math.random()*HEIGHT;
                    if(expBox2.x < 100){
                       expBox2.x += 200;
                    };
                    if(expBox3.x < 100){
                        expBox3.x += 200;
                    };
                    if(expBox2.x > WIDTH-100){
                        expBox2.x -= 200;
                    };
                    if(expBox3.x > WIDTH-100){
                        expBox3.x -=  200;
                    };
                    if(expBox2.y > HEIGHT-100){
                        expBox2.y += 200;
                    };
                    if(expBox3.y > HEIGHT-100){
                        expBox3.y += 200;
                    };
                    if(expBox2.y < 100){
                        expBox2.y += 200;
                    };
                    if(expBox3.y < 100){
                        expBox3.y += 200;
                    };

                    ai6.count = 0;
                };

                // Update Stats
                if(speed < 12){
                    this.speed = speed;
                } else {
                    this.speed = 12;
                };

                // Movement
                if(Keystate[space]){
                    spell.update();
                } else if(!Keystate === false){
                    spell.vannish();
                }

                if(Keystate[up]){
                    this.y -= this.speed;
                };
                if(Keystate[down]){
                    this.y += this.speed;
                };
                if(Keystate[left]){
                    this.x -= this.speed;
                };
                if(Keystate[right]){
                    this.x += this.speed;
                };
                
                if(Keystate[restart] && level === 19){
                    location.reload();
                };
                
                this.y = Math.max(Math.min(this.y, HEIGHT-this.height), (0+100)-this.height);
                this.x = Math.max(Math.min(this.x, WIDTH-this.width), 0);

                if(exp >= maxexp){
                    var newexp = exp - maxexp;
                    rank++;
                    exp = newexp;

                    if(level === 1){
                        maxexp += 6
                    };
                    if(level === 2){
                        maxexp += 8;
                    } else if(level === 3){
                        maxexp += 9;
                    } else if(level === 4){
                        maxexp += 10;
                    } else if(level === 5){
                        maxexp += 11;
                    } else if(level === 6){
                        maxexp += 13; 
                    } else if(level === 7){
                        maxexp += 16; 
                    } else if(level === 8){
                        maxexp += 22; 
                    } else if(level === 9){
                        maxexp += 26; 
                    } else if(level === 10){
                        maxexp += 28;
                    } else if(level === 11){
                        maxexp += 33;
                    } else if(level === 12){
                        maxexp += 38;
                    } else if(level === 13){
                        maxexp += 45;
                    } else if(level === 14){
                        maxexp += 49;
                    } else if(level === 15){
                        maxexp += 55;
                    } else if(level === 16){
                        maxexp += 62;
                    } else if(level === 17){
                        maxexp += 70;
                    } else if(level === 18){
                        maxexp += 77;
                    };
                    
                    health += 8;
                    maxhealth += 8;
                    attack += 4;
                    speed += 0.25;
                } else

                if(health <= 0){
                    alert("Xiang Qi's imperial forces overpowered you!");
                    location.reload();
                };
            },
            
            timer: 1,
            timer_v1: true,
            timer2: 1,
            timer_v2: false,
            timer3: 1,
            timer_v3: false,
            timer4: 1,
            timer_v4: false,
            timer5: 1,
            timer_v5: false,

            draw: function(){
                if(this.bool){
                    if(this.timer_v1){
                        this.timer--;
                        ctx.drawImage(wiz_vib, 0, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer < 0){
                        this.timer_v1 = false;
                        this.timer = 1;
                        this.timer_v2 = true;
                    }
                    if(this.timer_v2){
                        this.timer2--;
                        ctx.drawImage(wiz_vib, 32, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer2 < 0){
                        this.timer_v2 = false;
                        this.timer2 = 1;
                        this.timer_v3 = true;
                    }
                    if(this.timer_v3){
                        this.timer3--;
                        ctx.drawImage(wiz_vib, 64, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer3 < 0){
                        this.timer_v3 = false;
                        this.timer3 = 1;
                        this.timer_v4 = true;
                    }
                    if(this.timer_v4){
                        this.timer4--;
                        ctx.drawImage(wiz_vib, 96, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer4 < 0){
                        this.timer_v4 = false;
                        this.timer4 = 1;
                        this.timer_v5 = true;
                    }
                    if(this.timer_v5){
                        this.timer5--;
                        ctx.drawImage(wiz_vib, 128, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer5 < 0){
                        this.timer_v5 = false;
                        this.timer5 = 1;
                        this.timer_v1 = true;
                    }
                } else {
                    this.timer5 = 1;
                    this.timer4 = 1;
                    this.timer3 = 1;
                    this.timer2 = 1;
                    this.timer = 1;
                    this.timer_v1 = true;
                    this.timer_v2 = false;
                    this.timer_v3 = false;
                    this.timer_v4 = false;
                    this.timer_v5 = false;
                    ctx.drawImage(wizard, this.x, this.y, this.width, this.height);
                }
            }
        };

        var sword = new Image();
        sword.src = "sword.png";

        var spell = {
            x: null,
            y: null,
            width: 48,
            height: 48,
            damage: attack,

            vannish: function(){
                this.x = -70000;
                this.y = -10000;
            },

            update: function(){
                    // Update Stats
                    this.damage = attack;

                    this.x = player.x + 5;
                    this.y = player.y - 35;
            },

            draw: function(){
                ctx.drawImage(sword, this.x, this.y, this.width, this.height);
            }
        };
        
        var spell_ball1 = {
            x: null,
            y: null,
            height: 16,
            width: 16,
            bool: true,
            
            update: function(){
                
                this.x = spell.x;
                this.y = spell.y - 7;
                
            },
            
            timer: 1,
            timer_v1: true,
            timer2: 1,
            timer_v2: false,
            timer3: 1,
            timer_v3: false,
            timer4: 1,
            timer_v4: false,
            timer5: 1,
            timer_v5: false,
            timer6: 1,
            timer_v6: false,
            timer7: 1,
            timer_v7: false,
            timer8: 1,
            timer_v8: false,
            timer9: 1,
            timer_v9: false,
            timer10: 1,
            timer_v10: false,

            draw: function(){
                    if(this.timer_v1){
                        this.timer--;
                        ctx.drawImage(spell_ball, 0, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer < 0){
                        this.timer_v1 = false;
                        this.timer = 1;
                        this.timer_v2 = true;
                    }
                    if(this.timer_v2){
                        this.timer2--;
                        ctx.drawImage(spell_ball, 32, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer2 < 0){
                        this.timer_v2 = false;
                        this.timer2 = 1;
                        this.timer_v3 = true;
                    }
                    if(this.timer_v3){
                        this.timer3--;
                        ctx.drawImage(spell_ball, 64, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer3 < 0){
                        this.timer_v3 = false;
                        this.timer3 = 1;
                        this.timer_v4 = true;
                    }
                    if(this.timer_v4){
                        this.timer4--;
                        ctx.drawImage(spell_ball, 96, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer4 < 0){
                        this.timer_v4 = false;
                        this.timer4 = 1;
                        this.timer_v5 = true;
                    }
                    if(this.timer_v5){
                        this.timer5--;
                        ctx.drawImage(spell_ball, 128, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer5 < 0){
                        this.timer_v5 = false;
                        this.timer5 = 1;
                        this.timer_v6 = true;
                    }
                    if(this.timer_v6){
                        this.timer6--;
                        ctx.drawImage(spell_ball, 160, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer6 < 0){
                        this.timer_v6 = false;
                        this.timer6 = 1;
                        this.timer_v7 = true;
                    }
                    if(this.timer_v7){
                        this.timer7--;
                        ctx.drawImage(spell_ball, 192, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer7 < 0){
                        this.timer_v7 = false;
                        this.timer7 = 1;
                        this.timer_v8 = true;
                    }
                    if(this.timer_v8){
                        this.timer8--;
                        ctx.drawImage(spell_ball, 224, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer8 < 0){
                        this.timer_v8 = false;
                        this.timer8 = 1;
                        this.timer_v9 = true;
                    }
                    if(this.timer_v9){
                        this.timer9--;
                        ctx.drawImage(spell_ball, 256, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer9 < 0){
                        this.timer_v9 = false;
                        this.timer9 = 1;
                        this.timer_v10 = true;
                    }
                    if(this.timer_v10){
                        this.timer10--;
                        ctx.drawImage(spell_ball, 288, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer10 < 0){
                        this.timer_v10 = false;
                        this.timer10 = 1;
                        this.timer_v1 = true;
                    }
            }
        };
        
        var spell_ball2 = {
            x: null,
            y: null,
            height: 16,
            width: 16,
            bool: true,
            
            update: function(){
                
                this.x = spell.x + 27;
                this.y = spell.y - 7;
                
            },
            
            timer: 1,
            timer_v1: true,
            timer2: 1,
            timer_v2: false,
            timer3: 1,
            timer_v3: false,
            timer4: 1,
            timer_v4: false,
            timer5: 1,
            timer_v5: false,
            timer6: 1,
            timer_v6: false,
            timer7: 1,
            timer_v7: false,
            timer8: 1,
            timer_v8: false,
            timer9: 1,
            timer_v9: false,
            timer10: 1,
            timer_v10: false,

            draw: function(){
                    if(this.timer_v1){
                        this.timer--;
                        ctx.drawImage(spell_ball, 0, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer < 0){
                        this.timer_v1 = false;
                        this.timer = 1;
                        this.timer_v2 = true;
                    }
                    if(this.timer_v2){
                        this.timer2--;
                        ctx.drawImage(spell_ball, 32, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer2 < 0){
                        this.timer_v2 = false;
                        this.timer2 = 1;
                        this.timer_v3 = true;
                    }
                    if(this.timer_v3){
                        this.timer3--;
                        ctx.drawImage(spell_ball, 64, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer3 < 0){
                        this.timer_v3 = false;
                        this.timer3 = 1;
                        this.timer_v4 = true;
                    }
                    if(this.timer_v4){
                        this.timer4--;
                        ctx.drawImage(spell_ball, 96, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer4 < 0){
                        this.timer_v4 = false;
                        this.timer4 = 1;
                        this.timer_v5 = true;
                    }
                    if(this.timer_v5){
                        this.timer5--;
                        ctx.drawImage(spell_ball, 128, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer5 < 0){
                        this.timer_v5 = false;
                        this.timer5 = 1;
                        this.timer_v6 = true;
                    }
                    if(this.timer_v6){
                        this.timer6--;
                        ctx.drawImage(spell_ball, 160, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer6 < 0){
                        this.timer_v6 = false;
                        this.timer6 = 1;
                        this.timer_v7 = true;
                    }
                    if(this.timer_v7){
                        this.timer7--;
                        ctx.drawImage(spell_ball, 192, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer7 < 0){
                        this.timer_v7 = false;
                        this.timer7 = 1;
                        this.timer_v8 = true;
                    }
                    if(this.timer_v8){
                        this.timer8--;
                        ctx.drawImage(spell_ball, 224, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer8 < 0){
                        this.timer_v8 = false;
                        this.timer8 = 1;
                        this.timer_v9 = true;
                    }
                    if(this.timer_v9){
                        this.timer9--;
                        ctx.drawImage(spell_ball, 256, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer9 < 0){
                        this.timer_v9 = false;
                        this.timer9 = 1;
                        this.timer_v10 = true;
                    }
                    if(this.timer_v10){
                        this.timer10--;
                        ctx.drawImage(spell_ball, 288, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer10 < 0){
                        this.timer_v10 = false;
                        this.timer10 = 1;
                        this.timer_v1 = true;
                    }
            }
        };
        
        var spell_ball3 = {
            x: null,
            y: null,
            height: 16,
            width: 16,
            bool: true,
            
            update: function(){
                
                this.x = spell.x - 17;
                this.y = spell.y + 10;
                
            },
            
            timer: 1,
            timer_v1: true,
            timer2: 1,
            timer_v2: false,
            timer3: 1,
            timer_v3: false,
            timer4: 1,
            timer_v4: false,
            timer5: 1,
            timer_v5: false,
            timer6: 1,
            timer_v6: false,
            timer7: 1,
            timer_v7: false,
            timer8: 1,
            timer_v8: false,
            timer9: 1,
            timer_v9: false,
            timer10: 1,
            timer_v10: false,

            draw: function(){
                    if(this.timer_v1){
                        this.timer--;
                        ctx.drawImage(spell_ball, 0, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer < 0){
                        this.timer_v1 = false;
                        this.timer = 1;
                        this.timer_v2 = true;
                    }
                    if(this.timer_v2){
                        this.timer2--;
                        ctx.drawImage(spell_ball, 32, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer2 < 0){
                        this.timer_v2 = false;
                        this.timer2 = 1;
                        this.timer_v3 = true;
                    }
                    if(this.timer_v3){
                        this.timer3--;
                        ctx.drawImage(spell_ball, 64, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer3 < 0){
                        this.timer_v3 = false;
                        this.timer3 = 1;
                        this.timer_v4 = true;
                    }
                    if(this.timer_v4){
                        this.timer4--;
                        ctx.drawImage(spell_ball, 96, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer4 < 0){
                        this.timer_v4 = false;
                        this.timer4 = 1;
                        this.timer_v5 = true;
                    }
                    if(this.timer_v5){
                        this.timer5--;
                        ctx.drawImage(spell_ball, 128, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer5 < 0){
                        this.timer_v5 = false;
                        this.timer5 = 1;
                        this.timer_v6 = true;
                    }
                    if(this.timer_v6){
                        this.timer6--;
                        ctx.drawImage(spell_ball, 160, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer6 < 0){
                        this.timer_v6 = false;
                        this.timer6 = 1;
                        this.timer_v7 = true;
                    }
                    if(this.timer_v7){
                        this.timer7--;
                        ctx.drawImage(spell_ball, 192, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer7 < 0){
                        this.timer_v7 = false;
                        this.timer7 = 1;
                        this.timer_v8 = true;
                    }
                    if(this.timer_v8){
                        this.timer8--;
                        ctx.drawImage(spell_ball, 224, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer8 < 0){
                        this.timer_v8 = false;
                        this.timer8 = 1;
                        this.timer_v9 = true;
                    }
                    if(this.timer_v9){
                        this.timer9--;
                        ctx.drawImage(spell_ball, 256, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer9 < 0){
                        this.timer_v9 = false;
                        this.timer9 = 1;
                        this.timer_v10 = true;
                    }
                    if(this.timer_v10){
                        this.timer10--;
                        ctx.drawImage(spell_ball, 288, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer10 < 0){
                        this.timer_v10 = false;
                        this.timer10 = 1;
                        this.timer_v1 = true;
                    }
            }
        };
        
        var spell_ball4 = {
            x: null,
            y: null,
            height: 16,
            width: 16,
            bool: true,
            
            update: function(){
                
                this.x = spell.x + 42;
                this.y = spell.y + 10;
                
            },
            
            timer: 1,
            timer_v1: true,
            timer2: 1,
            timer_v2: false,
            timer3: 1,
            timer_v3: false,
            timer4: 1,
            timer_v4: false,
            timer5: 1,
            timer_v5: false,
            timer6: 1,
            timer_v6: false,
            timer7: 1,
            timer_v7: false,
            timer8: 1,
            timer_v8: false,
            timer9: 1,
            timer_v9: false,
            timer10: 1,
            timer_v10: false,

            draw: function(){
                    if(this.timer_v1){
                        this.timer--;
                        ctx.drawImage(spell_ball, 0, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer < 0){
                        this.timer_v1 = false;
                        this.timer = 1;
                        this.timer_v2 = true;
                    }
                    if(this.timer_v2){
                        this.timer2--;
                        ctx.drawImage(spell_ball, 32, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer2 < 0){
                        this.timer_v2 = false;
                        this.timer2 = 1;
                        this.timer_v3 = true;
                    }
                    if(this.timer_v3){
                        this.timer3--;
                        ctx.drawImage(spell_ball, 64, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer3 < 0){
                        this.timer_v3 = false;
                        this.timer3 = 1;
                        this.timer_v4 = true;
                    }
                    if(this.timer_v4){
                        this.timer4--;
                        ctx.drawImage(spell_ball, 96, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer4 < 0){
                        this.timer_v4 = false;
                        this.timer4 = 1;
                        this.timer_v5 = true;
                    }
                    if(this.timer_v5){
                        this.timer5--;
                        ctx.drawImage(spell_ball, 128, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer5 < 0){
                        this.timer_v5 = false;
                        this.timer5 = 1;
                        this.timer_v6 = true;
                    }
                    if(this.timer_v6){
                        this.timer6--;
                        ctx.drawImage(spell_ball, 160, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer6 < 0){
                        this.timer_v6 = false;
                        this.timer6 = 1;
                        this.timer_v7 = true;
                    }
                    if(this.timer_v7){
                        this.timer7--;
                        ctx.drawImage(spell_ball, 192, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer7 < 0){
                        this.timer_v7 = false;
                        this.timer7 = 1;
                        this.timer_v8 = true;
                    }
                    if(this.timer_v8){
                        this.timer8--;
                        ctx.drawImage(spell_ball, 224, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer8 < 0){
                        this.timer_v8 = false;
                        this.timer8 = 1;
                        this.timer_v9 = true;
                    }
                    if(this.timer_v9){
                        this.timer9--;
                        ctx.drawImage(spell_ball, 256, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer9 < 0){
                        this.timer_v9 = false;
                        this.timer9 = 1;
                        this.timer_v10 = true;
                    }
                    if(this.timer_v10){
                        this.timer10--;
                        ctx.drawImage(spell_ball, 288, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer10 < 0){
                        this.timer_v10 = false;
                        this.timer10 = 1;
                        this.timer_v1 = true;
                    }
            }
        };
        
        var spell_ball5 = {
            x: null,
            y: null,
            height: 16,
            width: 16,
            bool: true,
            
            update: function(){
                
                this.x = spell.x - 17;
                this.y = spell.y + 25;
                
            },
            
            timer: 1,
            timer_v1: true,
            timer2: 1,
            timer_v2: false,
            timer3: 1,
            timer_v3: false,
            timer4: 1,
            timer_v4: false,
            timer5: 1,
            timer_v5: false,
            timer6: 1,
            timer_v6: false,
            timer7: 1,
            timer_v7: false,
            timer8: 1,
            timer_v8: false,
            timer9: 1,
            timer_v9: false,
            timer10: 1,
            timer_v10: false,

            draw: function(){
                    if(this.timer_v1){
                        this.timer--;
                        ctx.drawImage(spell_ball, 0, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer < 0){
                        this.timer_v1 = false;
                        this.timer = 1;
                        this.timer_v2 = true;
                    }
                    if(this.timer_v2){
                        this.timer2--;
                        ctx.drawImage(spell_ball, 32, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer2 < 0){
                        this.timer_v2 = false;
                        this.timer2 = 1;
                        this.timer_v3 = true;
                    }
                    if(this.timer_v3){
                        this.timer3--;
                        ctx.drawImage(spell_ball, 64, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer3 < 0){
                        this.timer_v3 = false;
                        this.timer3 = 1;
                        this.timer_v4 = true;
                    }
                    if(this.timer_v4){
                        this.timer4--;
                        ctx.drawImage(spell_ball, 96, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer4 < 0){
                        this.timer_v4 = false;
                        this.timer4 = 1;
                        this.timer_v5 = true;
                    }
                    if(this.timer_v5){
                        this.timer5--;
                        ctx.drawImage(spell_ball, 128, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer5 < 0){
                        this.timer_v5 = false;
                        this.timer5 = 1;
                        this.timer_v6 = true;
                    }
                    if(this.timer_v6){
                        this.timer6--;
                        ctx.drawImage(spell_ball, 160, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer6 < 0){
                        this.timer_v6 = false;
                        this.timer6 = 1;
                        this.timer_v7 = true;
                    }
                    if(this.timer_v7){
                        this.timer7--;
                        ctx.drawImage(spell_ball, 192, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer7 < 0){
                        this.timer_v7 = false;
                        this.timer7 = 1;
                        this.timer_v8 = true;
                    }
                    if(this.timer_v8){
                        this.timer8--;
                        ctx.drawImage(spell_ball, 224, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer8 < 0){
                        this.timer_v8 = false;
                        this.timer8 = 1;
                        this.timer_v9 = true;
                    }
                    if(this.timer_v9){
                        this.timer9--;
                        ctx.drawImage(spell_ball, 256, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer9 < 0){
                        this.timer_v9 = false;
                        this.timer9 = 1;
                        this.timer_v10 = true;
                    }
                    if(this.timer_v10){
                        this.timer10--;
                        ctx.drawImage(spell_ball, 288, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer10 < 0){
                        this.timer_v10 = false;
                        this.timer10 = 1;
                        this.timer_v1 = true;
                    }
            }
        };
        
        var spell_ball6 = {
            x: null,
            y: null,
            height: 16,
            width: 16,
            bool: true,
            
            update: function(){
                
                this.x = spell.x + 42;
                this.y = spell.y + 25;
                
            },
            
            timer: 1,
            timer_v1: true,
            timer2: 1,
            timer_v2: false,
            timer3: 1,
            timer_v3: false,
            timer4: 1,
            timer_v4: false,
            timer5: 1,
            timer_v5: false,
            timer6: 1,
            timer_v6: false,
            timer7: 1,
            timer_v7: false,
            timer8: 1,
            timer_v8: false,
            timer9: 1,
            timer_v9: false,
            timer10: 1,
            timer_v10: false,

            draw: function(){
                    if(this.timer_v1){
                        this.timer--;
                        ctx.drawImage(spell_ball, 0, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer < 0){
                        this.timer_v1 = false;
                        this.timer = 1;
                        this.timer_v2 = true;
                    }
                    if(this.timer_v2){
                        this.timer2--;
                        ctx.drawImage(spell_ball, 32, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer2 < 0){
                        this.timer_v2 = false;
                        this.timer2 = 1;
                        this.timer_v3 = true;
                    }
                    if(this.timer_v3){
                        this.timer3--;
                        ctx.drawImage(spell_ball, 64, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer3 < 0){
                        this.timer_v3 = false;
                        this.timer3 = 1;
                        this.timer_v4 = true;
                    }
                    if(this.timer_v4){
                        this.timer4--;
                        ctx.drawImage(spell_ball, 96, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer4 < 0){
                        this.timer_v4 = false;
                        this.timer4 = 1;
                        this.timer_v5 = true;
                    }
                    if(this.timer_v5){
                        this.timer5--;
                        ctx.drawImage(spell_ball, 128, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer5 < 0){
                        this.timer_v5 = false;
                        this.timer5 = 1;
                        this.timer_v6 = true;
                    }
                    if(this.timer_v6){
                        this.timer6--;
                        ctx.drawImage(spell_ball, 160, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer6 < 0){
                        this.timer_v6 = false;
                        this.timer6 = 1;
                        this.timer_v7 = true;
                    }
                    if(this.timer_v7){
                        this.timer7--;
                        ctx.drawImage(spell_ball, 192, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer7 < 0){
                        this.timer_v7 = false;
                        this.timer7 = 1;
                        this.timer_v8 = true;
                    }
                    if(this.timer_v8){
                        this.timer8--;
                        ctx.drawImage(spell_ball, 224, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer8 < 0){
                        this.timer_v8 = false;
                        this.timer8 = 1;
                        this.timer_v9 = true;
                    }
                    if(this.timer_v9){
                        this.timer9--;
                        ctx.drawImage(spell_ball, 256, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer9 < 0){
                        this.timer_v9 = false;
                        this.timer9 = 1;
                        this.timer_v10 = true;
                    }
                    if(this.timer_v10){
                        this.timer10--;
                        ctx.drawImage(spell_ball, 288, 0, 32, 32, this.x, this.y, this.width, this.height);
                    }
                    if(this.timer10 < 0){
                        this.timer_v10 = false;
                        this.timer10 = 1;
                        this.timer_v1 = true;
                    }
            }
        };

        var cannon_img = new Image();
        cannon_img.src = "cannon.png";

        var ball_img = new Image();
        ball_img.src = "ball.png";

        var cannon = {
            x: null,
            y: null,
            side: 48,
            speed: 3,
            vel: null,
            hp: null,
            alive: true,
            timer: 75,
            timer2: 25,

            vannish: function(){
                this.x = -1000;
                this.y = -1000;
            },

            update: function(){
                this.x += this.vel.x;

                this.timer--;

                if (this.x < 0){
                    this.vel.x *= -1;
                } else if(this.x+this.side > WIDTH){
                    this.vel.x *= -1;
                };

                if(this.hp < 0){
                    this.alive = false;
                    if(this.alive === false && level === 8){
                        attackBoost.x = this.x + 8;
                        attackBoost.y = this.y + 8;
                    };
                    exp += 25;
                    this.vannish();
                    this.hp = 1000;
                };

                if(this.timer === 0){
                    this.timer2--;
                    ball.x = this.x + 8;
                    ball.y = this.y + 8;
                    this.timer = 75;
                };

            },

            draw: function(){
                ctx.drawImage(cannon_img, this.x, this.y, this.side, this.side);
            }
        };

        var ball = {
            x: null,
            y: null,
            side: 22,
            speed: 20,
            vel: null,
            hp: null,
            alive: true,

            vannish: function(){
                this.x = -1000;
                this.y = -1000;
            },

            update: function(){
                this.y += this.vel.y;

                if(this.hp < 0){
                    exp += 5;
                    this.vannish();
                    this.hp = 1000;
                    this.alive = false;

                };

            },

            draw: function(){
                ctx.drawImage(ball_img, this.x, this.y, this.side, this.side);
            }
        };
        
        var cannon2 = {
            x: null,
            y: null,
            side: 48,
            speed: 3,
            vel: null,
            hp: null,
            alive: true,
            timer: 75,
            timer2: 25,

            vannish: function(){
                this.x = -1000;
                this.y = -1000;
            },

            update: function(){
                this.x += this.vel.x;

                this.timer--;

                if (this.x < 0){
                    this.vel.x *= -1;
                } else if(this.x+this.side > WIDTH){
                    this.vel.x *= -1;
                };

                if(this.hp < 0){
                    this.alive = false;
                    if(this.alive === false && level === 8){
                        attackBoost.x = this.x + 8;
                        attackBoost.y = this.y + 8;
                    };
                    exp += 25;
                    this.vannish();
                    this.hp = 1000;
                };

                if(this.timer === 0){
                    this.timer2--;
                    ball2.x = this.x + 8;
                    ball2.y = this.y + 8;
                    this.timer = 75;
                };

            },

            draw: function(){
                ctx.drawImage(cannon_img, this.x, this.y, this.side, this.side);
            }
        };

        var ball2 = {
            x: null,
            y: null,
            side: 22,
            speed: 20,
            vel: null,
            hp: null,
            alive: true,

            vannish: function(){
                this.x = -1000;
                this.y = -1000;
            },

            update: function(){
                this.y += this.vel.y;

                if(this.hp < 0){
                    exp += 5;
                    this.vannish();
                    this.hp = 1000;
                    this.alive = false;

                };

            },

            draw: function(){
                ctx.drawImage(ball_img, this.x, this.y, this.side, this.side);
            }
        };

        var bg = new Image();
        bg.src = "Sprites/ai1.png";


        var ai = {
            x: null,
            y: null,
            side: 32,
            speed: 4.5,
            vel: null,
            hp: null,
            alive: true,

            vannish: function(){
                this.x = -1000;
                this.y = -1000;
            },

            update: function(){
                this.x += this.vel.x;
                this.y += this.vel.y;

                if (this.x < 0){
                    this.vel.x *= -1;
                } else if(this.x+this.side > WIDTH){
                    this.vel.x *= -1;
                };

                if(this.hp < 0){
                    exp += 5;
                    this.vannish();
                    this.hp = 1000;
                    this.alive = false;

                    if(this.alive === false && level === 4){
                        count += 1;
                    };

                    if(this.alive === false && level === 2){
                        count += 1;
                    };
                };

            },

            draw: function(){
                ctx.fillStyle = '#6EB7F6';
                ctx.drawImage(bg, this.x, this.y, this.side, this.side);
            }
        };

        var ai2 = {
            x: null,
            y: null,
            side: 32,
            speed: 4.5,
            vel: null,
            hp: null,
            alive: true,

            vannish: function(){
                this.x = -1000;
            },

            update: function(){
                this.x += this.vel.x;
                this.y += this.vel.y;

                if (this.x < 0){
                    this.vel.x *= -1;
                } else if(this.x+this.side > WIDTH){
                    this.vel.x *= -1;
                };

                if(this.hp < 0){
                    exp += 5;
                    this.vannish();
                    this.hp = 1000;
                    this.alive = false;

                    if(this.alive === false && level === 4){
                        count += 1;
                    };

                    if(this.alive === false && level === 2){
                        count += 1;
                    };
                };

            },

            draw: function(){
                ctx.fillStyle = '#6EB7F6';
                ctx.drawImage(bg, this.x, this.y, this.side, this.side);
            }
        };

        var soldier = {
            x: null,
            y: null,
            side: 32,
            speed: 6.5,
            vel: null,
            hp: null,
            alive: true,

            vannish: function(){
                this.x = -1000;
            },

            update: function(){
                this.x += this.vel.x;
                this.y += this.vel.y;

                if (this.x < 0){
                    this.vel.x *= -1;
                } else if(this.x+this.side > WIDTH){
                    this.vel.x *= -1;
                };

                if(this.hp < 0){
                    exp += 5;
                    this.vannish();
                    this.hp = 1000;
                    this.alive = false;
                };

            },

            draw: function(){
                ctx.drawImage(bg, this.x, this.y, this.side, this.side);
            }
        };

        var bg2 = new Image();
        bg2.src = "Sprites/ai2.png";

        var ai3 = {
            x: null,
            y: null,
            side: 38,
            speed: 5.5,
            vel: null,
            hp: null,
            alive: true,

            vannish: function(){
                this.x = -1000;
            },

            update: function(){
                this.x += this.vel.x;
                this.y += this.vel.y;

                if (this.y < 0){
                    this.vel.y *= -1;
                } else if(this.y+this.side > HEIGHT){
                    this.vel.y *= -1;
                };

                if(this.hp < 0){
                    exp += 6;
                    this.vannish();
                    this.hp = 1000;
                    this.alive = false;

                    if(this.alive === false && level === 4){
                        count += 1;
                    };

                    if(this.alive === false && level === 2){
                        count += 1;
                    };
                };

            },

            draw: function(){
                ctx.fillStyle = '#BD192C';
                ctx.drawImage(bg2, this.x, this.y, this.side, this.side);
            }
        };

        var ai4 = {
            x: null,
            y: null,
            side: 38,
            speed: 5.5,
            vel: null,
            hp: null,
            alive: true,

            vannish: function(){
                this.x = -1000;
            },

            update: function(){
                this.x += this.vel.x;
                this.y += this.vel.y;

                if (this.y < 0){
                    this.vel.y *= -1;
                } else if(this.y+this.side > HEIGHT){
                    this.vel.y *= -1;
                };

                if(this.hp < 0){
                    exp += 6;
                    this.vannish();
                    this.hp = 1000;
                    this.alive = false;

                    if(this.alive === false && level === 4){
                        count += 1;
                    };
                };

            },

            draw: function(){
                ctx.fillStyle = '#BD192C';
                ctx.drawImage(bg2, this.x, this.y, this.side, this.side);
            }
        };

        var ninja = new Image();
        ninja.src = "Sprites/ai5.png";

        var knight = new Image();
        knight.src = "Sprites/ai6.png";

        var ninja1 = {
            x: null,
            y: null,
            side: 38,
            speed: 0,
            vel: null,
            hp: null,
            alive: true,

            vannish: function(){
                this.x = -1000;
            },

            update: function(){

                if(this.hp < 0){
                    this.alive = false;
                    exp += 3;
                    this.vannish();
                    this.hp = 1000;
                };
            },

            draw: function(){
                ctx.drawImage(ninja, this.x, this.y, this.side, this.side);
            }
        };
        var ninja2 = {
            x: null,
            y: null,
            side: 38,
            speed: 0,
            vel: null,
            hp: null,
            alive: true,

            vannish: function(){
                this.x = -1000;
            },

            update: function(){

                if(this.hp < 0){
                    this.alive = false;
                    exp += 3;
                    this.vannish();
                    this.hp = 1000;
                };
            },

            draw: function(){
                ctx.drawImage(ninja, this.x, this.y, this.side, this.side);
            }
        };

        var ninja1 = {
            x: null,
            y: null,
            side: 38,
            speed: 0,
            vel: null,
            hp: null,
            alive: true,

            vannish: function(){
                this.x = -1000;
            },

            update: function(){

                if(this.hp < 0){
                    this.alive = false;
                    exp += 3;
                    this.vannish();
                    this.hp = 1000;
                };
            },

            draw: function(){
                ctx.drawImage(ninja, this.x, this.y, this.side, this.side);
            }
        };

        var ai5 = {
            x: null,
            y: null,
            side: 38,
            speed: 0,
            vel: null,
            hp: null,
            alive: true,

            vannish: function(){
                this.x = -1000;
            },

            update: function(){

                if(this.hp < 0){
                    this.alive = false;
                    if(this.alive === false && level === 3){
                        attackBoost.x = this.x + 8;
                        attackBoost.y = this.y + 8;
                    };

                    exp += 3;
                    this.vannish();
                    this.hp = 1000;

                    if(this.alive === false && level === 4){
                        count += 1;
                    };
                };
            },

            draw: function(){
                ctx.fillStyle = '#BD192C';
                ctx.drawImage(ninja, this.x, this.y, this.side, this.side);
            }
        };

        var ai6 = {
            x: null,
            y: null,
            side: 44,
            speed: 7.5,
            vel: null,
            hp: null,
            alive: true,
            count: 0,

            vannish: function(){
                this.x = -1000;
                this.y = -1000;
            },

            update: function(){
                this.x += this.vel.x;
                this.y += this.vel.y;

                if (this.y < 0){
                    this.vel.y *= -1;
                } else if(this.y+this.side > HEIGHT){
                    this.vel.y *= -1;
                } else

                if (this.x < 0){
                    this.vel.x *= -1;
                } else if(this.x+this.side > WIDTH){
                    this.vel.x *= -1;
                };

                if(this.hp < 0){
                    exp += 9;
                    this.vannish();
                    this.hp = 2000;
                    this.alive = false;

                    if(this.alive === false && level === 4){
                        count += 1;
                    };
                    if(this.alive === false && level === 9){
                        this.count += 1;
                    };

                };

            },

            draw: function(){
                ctx.fillStyle = '#BD192C';
                ctx.drawImage(knight, this.x, this.y, this.side, this.side);
            }
        };

        var jin = {
            x: null,
            y: null,
            side: 44,
            speed: 7.5,
            vel: null,
            hp: null,
            alive: true,

            vannish: function(){
                this.x = -1000;
                this.y = -1000;
            },

            update: function(){
                this.x += this.vel.x;
                this.y += this.vel.y;

                if (this.y < 0){
                    this.vel.y *= -1;
                } else if(this.y+this.side > HEIGHT){
                    this.vel.y *= -1;
                } else

                if (this.x < 0){
                    this.vel.x *= -1;
                } else if(this.x+this.side > WIDTH){
                    this.vel.x *= -1;
                };

                if(this.hp < 0){
                    exp += 9;
                    this.vannish();
                    this.hp = 2000;
                    this.alive = false;

                    if(this.alive === false && level === 9){
                        ai6.count += 1;
                    };
                };

            },

            draw: function(){
                ctx.drawImage(knight, this.x, this.y, this.side, this.side);
            }
        };

        var ai7 = {
            x: null,
            y: null,
            side: 32,
            speed: 4.5,
            vel: null,
            hp: null,
            alive: true,

            vannish: function(){
                this.x = -1000;
            },

            update: function(){
                this.x += this.vel.x;
                this.y += this.vel.y;

                if (this.x < 0){
                    this.vel.x *= -1;
                } else if(this.x+this.side > WIDTH){
                    this.vel.x *= -1;
                };

                if(this.hp < 0){
                    exp += 5;
                    this.vannish();
                    this.hp = 1000;
                    this.alive = false;

                    if(this.alive === false && level === 4){
                        count += 1;
                    };

                    if(this.alive === false && level === 2){
                        count += 1;
                    };
                };

            },

            draw: function(){
                ctx.fillStyle = '#6EB7F6';
                ctx.drawImage(bg, this.x, this.y, this.side, this.side);
            }
        };

        var ai8 = {
            x: null,
            y: null,
            side: 38,
            speed: 6,
            vel: null,
            hp: null,

            vannish: function(){
                this.x = -1000;
                this.y = -1000;
            },

            update: function(){
                this.x += this.vel.x;
                this.y += this.vel.y;

                if (this.y < 0){
                    this.vel.y *= -1;
                } else if(this.y+this.side > HEIGHT){
                    this.vel.y *= -1;
                };

                if(this.hp < 0){
                    exp += 7;
                    this.alive = false
                    this.vannish();
                    this.hp = 1000;
                };

            },

            draw: function(){
                ctx.fillStyle = '#BD192C';
                ctx.drawImage(bg2, this.x, this.y, this.side, this.side);
            }
        };

        var robot = new Image();
        robot.src= "Sprites/mech.png";

        var ai9 = {
            x: null,
            y: null,
            side: 46,
            speed: 0,
            vel: null,
            hp: null,
            countDown: 150,
            countDown2: 150,
            randomX: Math.random()*WIDTH,
            randomY: Math.random()*HEIGHT,
            alive: true,

            vannish: function(){
                this.x = -1000;
            },

            update: function(){
                if(this.alive === true){
                    if(this.randomX > (WIDTH-this.side)){
                        this.randomX -= this.side;
                    };
                    if(this.randomY > (HEIGHT-this.side)){
                        this.randomY -= this.side
                    };

                    this.countDown--;

                    if(this.countDown < 1){
                        this.x = this.randomX;
                        this.y = this.randomY;
                        this.countDown2--;
                        if(this.countDown2 < 1){
                            this.vannish();
                            this.randomX = Math.random()*WIDTH;
                            this.randomY = Math.random()*HEIGHT;
                            this.countDown = 150;
                            this.countDown2 = 150;
                        };
                    };
                };

                if(this.hp < 0){
                    exp += 12;
                    this.alive = false;
                    this.vannish();
                    this.randomX = -100;
                    this.randomY = -100;
                    this.hp = 1000;
                };

            },

            draw: function(){
                ctx.drawImage(robot, this.x, this.y, this.side, this.side);
            }
        };

        var ai10 = {
            x: null,
            y: null,
            side: 46,
            speed: 0,
            vel: null,
            hp: null,
            countDown: 150,
            countDown2: 150,
            randomX: (Math.random()*WIDTH),
            randomY: (Math.random()*HEIGHT),
            alive: true,

            vannish: function(){
                this.x = -1000;
            },

            update: function(){
                if(this.alive === true){
                    if(this.randomX > (WIDTH-this.side)){
                        this.randomX -= this.side;
                    };
                    if(this.randomY > (HEIGHT-this.side)){
                        this.randomY -= this.side
                    };

                    this.countDown--;

                    if(this.countDown < 1){
                        this.x = this.randomX;
                        this.y = this.randomY;
                        this.countDown2--;
                        if(this.countDown2 < 1){
                            this.vannish();
                            this.randomX = Math.random()*WIDTH;
                            this.randomY = Math.random()*HEIGHT;
                            this.countDown = 150;
                            this.countDown2 = 150;
                        };
                    };
                };

                if(this.hp < 0){
                    this.alive = false;
                    exp += 12;
                    this.vannish();
                    this.randomX = -100;
                    this.randomY = -100;
                    this.hp = 1000;
                };

            },

            draw: function(){
                ctx.drawImage(robot, this.x, this.y, this.side, this.side);
            }
        };

        var ai11 = {
            x: null,
            y: null,
            side: 44,
            speed: 7.5,
            vel: null,
            hp: null,
            alive: true,

            vannish: function(){
                this.x = -1000;
            },

            update: function(){
                this.x += this.vel.x;
                this.y += this.vel.y;

                if (this.y < 0){
                    this.vel.y *= -1;
                } else if(this.y+this.side > HEIGHT){
                    this.vel.y *= -1;
                } else

                if (this.x < 0){
                    this.vel.x *= -1;
                } else if(this.x+this.side > WIDTH){
                    this.vel.x *= -1;
                };

                if(this.hp < 0){
                    exp += 9;
                    this.vannish();
                    this.hp = 1000;
                    this.alive = false;

                    if(this.alive === false && level === 4){
                        count += 1;
                    };
                };

            },

            draw: function(){
                ctx.fillStyle = '#BD192C';
                ctx.drawImage(knight, this.x, this.y, this.side, this.side);
            }
        };

        var guard = {
            x: null,
            y: null,
            side: 44,
            speed: 7.5,
            vel: null,
            hp: null,
            alive: true,

            vannish: function(){
                this.x = -1000;
            },

            update: function(){
                this.x += this.vel.x;
                this.y += this.vel.y;

                if (this.y < 0){
                    this.vel.y *= -1;
                } else if(this.y+this.side > HEIGHT){
                    this.vel.y *= -1;
                } else

                if (this.x < 0){
                    this.vel.x *= -1;
                } else if(this.x+this.side > WIDTH){
                    this.vel.x *= -1;
                };

                if(this.hp < 0){
                    exp += 9;
                    this.vannish();
                    this.hp = 2000;
                    this.alive = false;
                    if(this.alive === false && level === 9){
                        ai6.count += 1;
                    };
                };

            },

            draw: function(){
                ctx.drawImage(knight, this.x, this.y, this.side, this.side);
            }
        };

        //blocks
        var block_img = new Image();
        block_img.src = "Sprites/block.png";

        var block_1 = {
            x: null,
            y: null,
            side: 28,
            speed: 9.5,
            vel: null,
            hp: null,

            vannish: function(){
                this.x = -1000;
                this.y = -1000;
            },

            update: function(){
                this.x += this.vel.x;
                this.y += this.vel.y;


                if(this.hp < 0){
                    exp += 2;
                    this.vannish();
                    this.hp = 99;
                };

            },

            draw: function(){
                ctx.fillStyle = '#6EB7F6';
                ctx.drawImage(block_img, this.x, this.y, this.side, this.side);
            }
        };

        var block_2 = {
            x: null,
            y: null,
            side: 22,
            speed: 8.5,
            vel: null,
            hp: null,

            vannish: function(){
                this.x = -1000;
                this.y = -1000;
            },

            update: function(){
                this.x += this.vel.x;
                this.y += this.vel.y;


                if(this.hp < 0){
                    exp += 2;
                    this.vannish();
                    this.hp = 99;
                };

            },

            draw: function(){
                ctx.fillStyle = '#6EB7F6';
                ctx.drawImage(block_img, this.x, this.y, this.side, this.side);
            }
        };

        var block_3 = {
            x: null,
            y: null,
            side: 36,
            speed:10.5,
            vel: null,
            hp: null,

            vannish: function(){
                this.x = -1000;
                this.y = -1000;
            },

            update: function(){
                this.x += this.vel.x;
                this.y += this.vel.y;


                if(this.hp < 0){
                    exp += 2;
                    this.vannish();
                    this.hp = 99;
                };

            },

            draw: function(){
                ctx.fillStyle = '#6EB7F6';
                ctx.drawImage(block_img, this.x, this.y, this.side, this.side);
            }
        };

        var block_4 = {
            x: null,
            y: null,
            side: 33,
            speed: 10,
            vel: null,
            hp: null,

            vannish: function(){
                this.x = -1000;
                this.y = -1000;
            },

            update: function(){
                this.x += this.vel.x;
                this.y += this.vel.y;


                if(this.hp < 0){
                    exp += 2;
                    this.vannish();
                    this.hp = 99;
                };

            },

            draw: function(){
                ctx.fillStyle = '#6EB7F6';
                ctx.drawImage(block_img, this.x, this.y, this.side, this.side);
            }
        };

        var block_5 = {
            x: null,
            y: null,
            side: 19,
            speed: 8,
            vel: null,
            hp: null,

            vannish: function(){
                this.x = -1000;
                this.y = -1000;
            },

            update: function(){
                this.x += this.vel.x;
                this.y += this.vel.y;


                if(this.hp < 0){
                    exp += 2;
                    this.vannish();
                    this.hp = 99;
                };

            },

            draw: function(){
                ctx.fillStyle = '#6EB7F6';
                ctx.drawImage(block_img, this.x, this.y, this.side, this.side);
            }
        };

        //Bosses

        var squid = new Image();
        squid.src = 'Sprites/boss.png';

        var boss_jr = {
            x: null,
            y: null,
            side: 48,
            speed: 8,
            vel: null,
            hp: null,
            value: 115,
            bool: false,
            random1: (Math.random()*WIDTH) - this.side,
            random2: (Math.random()*WIDTH) - this.side,
            random3: (Math.random()*WIDTH) - this.side,
            random4: (Math.random()*WIDTH) - this.side,
            random5: (Math.random()*WIDTH) - this.side,
            alive: true,

            vannish: function(){
                this.x = -1000;
                this.y = -1000;
            },

            update: function(){
                this.x += this.vel.x;
                this.y += this.vel.y;

                if (this.x < 0){
                    this.vel.x *= -1;
                } else if(this.x+this.side > WIDTH){
                    this.vel.x *= -1;
                };

                this.value--;

                if(this.value < 1 && this.alive === true){ // Spawn Blocks
                    block_1.x = this.random1;
                    block_1.y = -50;

                    block_2.x = this.random2;
                    block_2.y = -50;

                    block_3.x = this.random3;
                    block_3.y = -50;

                    block_4.x = this.random4;
                    block_4.y = -50;

                    block_5.x = this.random5;
                    block_5.y = -50;

                    this.value = 115;
                    this.random1 = (Math.random()*WIDTH) - this.side;
                    this.random2 = (Math.random()*WIDTH) - this.side;
                    this.random3 = (Math.random()*WIDTH) - this.side;
                    this.random4 = (Math.random()*WIDTH) - this.side;
                    this.random5 = (Math.random()*WIDTH) - this.side;
                };


                if(this.hp < 0){
                    exp += 15;
                    this.vannish();
                    block_1.vannish();
                    block_2.vannish();
                    block_3.vannish();
                    block_4.vannish();
                    block_5.vannish();
                    this.hp = 1000;
                    this.bool = true;
                    this.alive = false;
                    if(this.alive === false && level === 5){
                        expBox.x = Math.random()*WIDTH;
                        expBox.y = Math.random()*HEIGHT;
                        healthBox.x = Math.random()*WIDTH;
                        healthBox.y = Math.random()*HEIGHT;
                        if(expBox.x < 100){
                            expBox.x += 200;
                        };
                        if(healthBox.x < 100){
                            healthBox.x += 200;
                        };
                        if(expBox.x > WIDTH-100){
                            expBox.x -= 200;
                        };
                        if(healthBox.x > WIDTH-100){
                            healthBox.x -= 200;
                        };
                        if(expBox.y > HEIGHT-100){
                            expBox.y += 200;
                        };
                        if(healthBox.y > HEIGHT-100){
                            healthBox.y += 200;
                        };
                        if(expBox.y < 100){
                            expBox.y += 200;
                        };
                        if(healthBox.y < 100){
                            healthBox.y += 200;
                        };
                        attackBoost.x = Math.random()*WIDTH;
                        attackBoost.y = Math.random()*HEIGHT;
                        speedBoost.x = Math.random()*WIDTH;
                        speedBoost.y = Math.random()*HEIGHT;
                        if(attackBoost.x < 100){
                            attackBoost.x += 200;
                        };
                        if(speedBoost.x < 100){
                            speedBoost.x += 200;
                        };
                        if(attackBoost.x > WIDTH-100){
                            attackBoost.x -= 200;
                        };
                        if(speedBoost.x > WIDTH-100){
                            speedBoost.x -=  200;
                        };
                        if(attackBoost.y > HEIGHT-100){
                            attackBoost.y += 200;
                        };
                        if(speedBoost.y > HEIGHT-100){
                            speedBoost.y += 200;
                        };
                        if(attackBoost.y < 100){
                            attackBoost.y += 200;
                        };
                        if(speedBoost.y < 100){
                            speedBoost.y += 200;
                        };
                    };
                };
            },

            draw: function(){
                ctx.fillStyle = '#6EB7F6';
                ctx.drawImage(squid, this.x, this.y, this.side, this.side);
            }
        };

        var guy_img = new Image();
        guy_img.src = 'Sprites/boss_sr.png';

        var boss_sr = {
            x: null,
            y: null,
            side: 44,
            speed: 8,
            vel: null,
            hp: null,
            value: 115,
            value2: 116,
            value22: 200,
            value3: 116,
            value32: 200,
            value4: 116,
            value42: 200,
            bool: false,
            random1: (Math.random()*WIDTH) - this.side,
            random2: (Math.random()*WIDTH) - this.side,
            random3: (Math.random()*WIDTH) - this.side,
            random4: (Math.random()*WIDTH) - this.side,
            random5: (Math.random()*WIDTH) - this.side,
            alive: true,

            vannish: function(){
                this.x = -1000;
                this.y = -1000;
            },

            update: function(){
                this.x += this.vel.x;
                this.y += this.vel.y;

                if (this.x < 0){
                    this.vel.x *= -1;
                } else if(this.x+this.side > WIDTH){
                    this.vel.x *= -1;
                };

                if (this.y < 0){
                    this.vel.y *= -1;
                } else if(this.y+this.side > HEIGHT){
                    this.vel.y *= -1;
                };

                if(this.hp < 0){
                    exp += 70;
                    this.vannish();
                    ai6.vannish();
                    guard.vannish();
                    jin.vannish();
                    this.hp = 1000;
                    this.bool = true;
                    this.alive = false;
                    if(this.alive === false && level === 10){
                        expBox.x = Math.random()*WIDTH;
                        expBox.y = Math.random()*HEIGHT;
                        healthBox.x = Math.random()*WIDTH;
                        healthBox.y = Math.random()*HEIGHT;
                        if(expBox.x < 100){
                            expBox.x += 200;
                        };
                        if(healthBox.x < 100){
                            healthBox.x += 200;
                        };
                        if(expBox.x > WIDTH-100){
                            expBox.x -= 200;
                        };
                        if(healthBox.x > WIDTH-100){
                            healthBox.x -= 200;
                        };
                        if(expBox.y > HEIGHT-100){
                            expBox.y += 200;
                        };
                        if(healthBox.y > HEIGHT-100){
                            healthBox.y += 200;
                        };
                        if(expBox.y < 100){
                            expBox.y += 200;
                        };
                        if(healthBox.y < 100){
                            healthBox.y += 200;
                        };
                        attackBoost.x = Math.random()*WIDTH;
                        attackBoost.y = Math.random()*HEIGHT;
                        speedBoost.x = Math.random()*WIDTH;
                        speedBoost.y = Math.random()*HEIGHT;
                        if(attackBoost.x < 100){
                            attackBoost.x += 200;
                        };
                        if(speedBoost.x < 100){
                            speedBoost.x += 200;
                        };
                        if(attackBoost.x > WIDTH-100){
                            attackBoost.x -= 200;
                        };
                        if(speedBoost.x > WIDTH-100){
                            speedBoost.x -=  200;
                        };
                        if(attackBoost.y > HEIGHT-100){
                            attackBoost.y += 200;
                        };
                        if(speedBoost.y > HEIGHT-100){
                            speedBoost.y += 200;
                        };
                        if(attackBoost.y < 100){
                            attackBoost.y += 200;
                        };
                        if(speedBoost.y < 100){
                            speedBoost.y += 200;
                        };
                    };
                };
            },

            draw: function(){
                ctx.fillStyle = '#6EB7F6';
                ctx.drawImage(guy_img, this.x, this.y, this.side, this.side);
            }
        };
        
        var bat = new Image();
        bat.src = 'bat.png';
        
        var qi = {
            x: null,
            y: null,
            side: 54,
            speed: 8,
            vel: null,
            hp: null,
            alive: true,
            timer_value_one: true,
            timer_value_two: false,
            timer_value_three: false,
            timer_value_four: false,
            timer: (Math.random()*50),
            timer_two: (Math.random()*50),
            timer_three: (Math.random()*50),
            timer_four: (Math.random()*50),
 
            vannish: function(){
                this.x = -1000;
                this.y = -10000;
            },

            update: function(){
                
                if(this.alive === true){
                    
                        this.timer -= 1;
                    

                        if(this.timer_value_one = true){
                            this.x += this.vel.x;
                        }
                        
                        if(this.timer < 0){
                            this.timer_value_one = false;
                            this.timer_value_two = true;
                        }
                    
                    
                        if(this.timer_value_two === true){
                            this.timer_two -= 1;
                            this.y += this.vel.y;
                        }

                        if(this.timer_two < 0){
                            this.timer_value_two = false;
                            this.timer_value_three = true;
                        }
                    
                        if(this.timer_value_three === true){
                            this.timer_three -= 1;
                            this.x -= this.vel.x;
                            this.y -= this.vel.y;
                        }

                        if(this.timer_three < 0){
                            this.timer_value_three = false;
                            this.timer_value_four = true;
                        }

                        if(this.timer_value_four === true){
                            this.timer_four -= 1;
                            this.y -= this.vel.y;
                            this.x -= (Math.random()*3)*this.vel.x;
                        }

                        if(this.timer_four < 0){
                            this.timer_value_four = false;
                            this.timer_value_three = false;
                            this.timer_value_two = false;

                            this.timer_value_one = true;

                            this.timer = (Math.random()*40);
                            this.timer_two = (Math.random()*40);
                            this.timer_three = (Math.random()*40);
                            this.timer_four = (Math.random()*40); 
                        }
                
                        if (this.y < 0){
                            this.vel.y *= -1;
                            this.y += (this.side/32);
                        } else if(this.y+this.side > HEIGHT){
                            this.vel.y *= -1;
                            this.y -= (this.side/32);
                        } else

                        if (this.x < 0){
                            this.vel.x *= -1;
                            this.x += (this.side/32);
                        } else if(this.x+this.side > WIDTH){
                            this.vel.x *= -1;
                            this.x -= (this.side/32);
                        };
               
                };
                

                if(this.hp < 0){
                    exp += 200;
                    this.hp = 1000;
                    this.alive = false;
                    this.vannish();
                    
                    rock.alive = false;
                    rock2.alive = false;
                    rock3.alive = false;
                    rock4.alive = false;
                    
                    rock.vannish();
                    rock2.vannish();
                    rock3.vannish();
                    rock4.vannish();
                };

            },

            draw: function(){
                ctx.drawImage(bat, this.x, this.y, this.side, this.side);
            }
        };

        var boulder_img = new Image();
        boulder_img.src = 'rock.gif';

        var boulder = {
            x: null,
            y: null,
            side: 40,
            speed: 7,
            vel: null,
            hp: null,
            alive: true,
            count: 0,

            vannish: function(){
                this.x = -1000;
            },

            update: function(){
                
                if(this.alive === true){
                    
                    this.x += this.vel.x;
                    this.y += (this.vel.y)/6;

                    if (this.y > HEIGHT){
                        this.x = 0;
                        this.y = -50;
                    }


                    if (this.x < 0){
                        this.vel.x *= -1;
                    } else if(this.x+this.side > WIDTH){
                        this.vel.x *= -1;
                    };
                
                };

                if(this.hp < 0){
                    exp += 10;
                    this.hp = 1000;
                    this.x = 0;
                    this.y = -50;

                    if(this.alive === false && level === 4){
                        count += 1;
                    };
                    if(this.alive === false && level === 9){
                        this.count += 1;
                    };

                };

            },

            draw: function(){
                ctx.drawImage(boulder_img, this.x, this.y, this.side, this.side);
            }
        };
        
        var boulder2 = {
            x: null,
            y: null,
            side: 40,
            speed: 7,
            vel: null,
            hp: null,
            alive: true,
            count: 0,

            vannish: function(){
                this.x = -1000;
            },

            update: function(){

                if(this.alive === true){
                    
                    this.x += this.vel.x;
                    this.y += (this.vel.y)/10;

                    if (this.y > HEIGHT){
                        this.x = HEIGHT-this.side;
                        this.y = -50;
                    }


                    if (this.x < 0){
                        this.vel.x *= -1;
                    } else if(this.x+this.side > WIDTH){
                        this.vel.x *= -1;
                    };
                
                };

                if(this.hp < 0){
                    exp += 10;
                    this.hp = 1000;
                    this.x = HEIGHT-this.side;
                    this.y = -50;

                    if(this.alive === false && level === 4){
                        count += 1;
                    };
                    if(this.alive === false && level === 9){
                        this.count += 1;
                    };

                };

            },

            draw: function(){
                ctx.drawImage(boulder_img, this.x, this.y, this.side, this.side);
            }
        };
        
        var rock = {
            x: null,
            y: null,
            side: 40,
            speed: 9,
            vel: null,
            hp: null,
            alive: true,
            count: 0,

            vannish: function(){
                this.x = -1000;
                this.y = 10000;
            },

            update: function(){

                if(this.alive === true){
                    this.speed += 0.00001;
                    
                    this.x += this.vel.x;
                    this.y += (this.vel.y)/10;

                    if (this.y > HEIGHT){
                        this.x = (Math.random()+Math.random())*(WIDTH/2);
                        this.y = -200;
                    }


                    if (this.x < 0){
                        this.vel.x *= -1;
                    } else if(this.x+this.side > WIDTH){
                        this.vel.x *= -1;
                    };
                
                };

                if(this.hp < 0){
                    exp += 15;
                    this.hp = 1000;
                    this.x = (Math.random()+Math.random())*(WIDTH/2);
                    this.y = -200;

                };

            },

            draw: function(){
                ctx.drawImage(boulder_img, this.x, this.y, this.side, this.side);
            }
        };
        
        var rock2 = {
            x: null,
            y: null,
            side: 40,
            speed: 6,
            vel: null,
            hp: null,
            alive: true,
            count: 0,

            vannish: function(){
                this.x = -1000;
                this.y = 10000;
            },

            update: function(){
                
                if(this.alive === true){
                    this.speed += 0.00001;
                    
                    this.x += this.vel.x;
                    this.y += (this.vel.y)/8;

                    if (this.y > HEIGHT){
                        this.x = (Math.random()+Math.random())*(WIDTH/2);
                        this.y = -200;
                    }


                    if (this.x < 0){
                        this.vel.x *= -1;
                    } else if(this.x+this.side > WIDTH){
                        this.vel.x *= -1;
                    };
                
                };

                if(this.hp < 0){
                    exp += 15;
                    this.hp = 1000;
                    this.x = (Math.random()+Math.random())*(WIDTH/2);
                    this.y = -200;

                };

            },

            draw: function(){
                ctx.drawImage(boulder_img, this.x, this.y, this.side, this.side);
            }
        };
        
        var rock3 = {
            x: null,
            y: null,
            side: 40,
            speed: 8,
            vel: null,
            hp: null,
            alive: true,
            count: 0,

            vannish: function(){
                this.x = -1000;
                this.y = 10000;
            },

            update: function(){

                if(this.alive === true){
                    this.speed += 0.00001;
                    
                    this.x += this.vel.x;
                    this.y += (this.vel.y)/9;

                    if (this.y > HEIGHT){
                        this.x = (Math.random()+Math.random())*(WIDTH/2);
                        this.y = -200;
                    }


                    if (this.x < 0){
                        this.vel.x *= -1;
                    } else if(this.x+this.side > WIDTH){
                        this.vel.x *= -1;
                    };
                
                };

                if(this.hp < 0){
                    exp += 15;
                    this.hp = 1000;
                    this.x = (Math.random()+Math.random())*(WIDTH/2);
                    this.y = -200;

                };

            },

            draw: function(){
                ctx.drawImage(boulder_img, this.x, this.y, this.side, this.side);
            }
        };
        
        var rock4 = {
            x: null,
            y: null,
            side: 40,
            speed: 7,
            vel: null,
            hp: null,
            alive: true,
            count: 0,

            vannish: function(){
                this.x = -1000;
                this.y = 10000;
            },

            update: function(){

                if(this.alive === true){
                    this.speed += 0.00001;
                    
                    this.x += this.vel.x;
                    this.y += (this.vel.y)/10;

                    if (this.y > HEIGHT){
                        this.x = (Math.random()+Math.random())*(WIDTH/2);
                        this.y = -200;
                    }


                    if (this.x < 0){
                        this.vel.x *= -1;
                    } else if(this.x+this.side > WIDTH){
                        this.vel.x *= -1;
                    };
                
                };

                if(this.hp < 0){
                    exp += 15;
                    this.hp = 1000;
                    this.x = (Math.random()+Math.random())*(WIDTH/2);
                    this.y = -200;

                };

            },

            draw: function(){
                ctx.drawImage(boulder_img, this.x, this.y, this.side, this.side);
            }
        };
        
        var star_img = new Image();
        star_img.src = 'Sprites/aorith.png';
        
        var aorith = {
            x: null,
            y: null,
            side: 44,
            speed: 6,
            vel: null,
            hp: null,
            alive: true,
            timer_value_one: true,
            timer_value_two: false,
            timer_value_three: false,
            timer_value_four: false,
            timer: (Math.random()*40),
            timer_two: (Math.random()*40),
            timer_three: (Math.random()*40),
            timer_four: (Math.random()*40),
 
            vannish: function(){
                this.x = -1000;
            },

            update: function(){
                if(this.alive === true){
             
                        aorith.timer -= 1;
                    
                        if(aorith.timer_value_one = true){
                            aorith.x += aorith.vel.x;
                        }
                        
                        if(aorith.timer < 0){
                            aorith.timer_value_one = false;
                            aorith.timer_value_two = true;
                            
                            
                        }
                    

                    
                        if(aorith.timer_value_two === true){
                            aorith.timer_two -= 1;
                            aorith.y += aorith.vel.y;
                        }

                        if(aorith.timer_two < 0){
                            aorith.timer_value_two = false;
                            aorith.timer_value_three = true;
                            
                            
                        }
                    

                    
                        if(aorith.timer_value_three === true){
                            aorith.timer_three -= 1;
                            aorith.x -= aorith.vel.x;
                            aorith.y -= aorith.vel.y;
                        }

                        if(aorith.timer_three < 0){
                            aorith.timer_value_three = false;
                            aorith.timer_value_four = true;
                            
                            
                        }
                    

                    
                        if(aorith.timer_value_four === true){
                            aorith.timer_four -= 1;
                            aorith.y -= aorith.vel.y;
                            aorith.x -= (Math.random()*2)*aorith.vel.x;
                        }

                        if(aorith.timer_four < 0){
                            aorith.timer_value_four = false;
                            aorith.timer_value_three = false;
                            aorith.timer_value_two = false;

                            aorith.timer_value_one = true;

                            aorith.timer = (Math.random()*40);
                            aorith.timer_two = (Math.random()*40);
                            aorith.timer_three = (Math.random()*40);
                            aorith.timer_four = (Math.random()*40);
                            
                            
                        }
                
                        if (this.y < 0){
                            this.vel.y *= -1;
                            this.y += (this.side/32);
                        } else if(this.y+this.side > HEIGHT){
                            this.vel.y *= -1;
                            this.y -= (this.side/32);
                        } else

                        if (this.x < 0){
                            this.vel.x *= -1;
                            this.x += (this.side/32);
                        } else if(this.x+this.side > WIDTH){
                            this.vel.x *= -1;
                            this.x -= (this.side/32);
                        };                
                
                };

                if(this.hp < 0){
                    exp += 14;
                    this.hp = 1000;
                    this.alive = false;
                    if(this.alive === false && level === 14){
                        expBox.x = this.x + 8;
                        expBox.y = this.y + 8;
                    };
                    this.vannish();

                };

            },

            draw: function(){
                ctx.drawImage(star_img, this.x, this.y, this.side, this.side);
            }
        };
        
        var aorith2 = {
            x: null,
            y: null,
            side: 44,
            speed: 6,
            vel: null,
            hp: null,
            alive: true,
            timer_value_one: true,
            timer_value_two: false,
            timer_value_three: false,
            timer_value_four: false,
            timer: (Math.random()*40),
            timer_two: (Math.random()*40),
            timer_three: (Math.random()*40),
            timer_four: (Math.random()*40),
 
            vannish: function(){
                this.x = -1000;
            },

            update: function(){
                
                if(this.alive === true){
                    
                    
                        aorith2.timer -= 1;
                    

                        if(aorith2.timer_value_one = true){
                            aorith2.x += aorith2.vel.x;
                        }
                        
                        if(aorith2.timer < 0){
                            aorith2.timer_value_one = false;
                            aorith2.timer_value_two = true;
                        }
                    
                    
                        if(aorith2.timer_value_two === true){
                            aorith2.timer_two -= 1;
                            aorith2.y += aorith2.vel.y;
                        }

                        if(aorith2.timer_two < 0){
                            aorith2.timer_value_two = false;
                            aorith2.timer_value_three = true;
                        }
                    
                        if(aorith2.timer_value_three === true){
                            aorith2.timer_three -= 1;
                            aorith2.x -= aorith2.vel.x;
                            aorith2.y -= aorith2.vel.y;
                        }

                        if(aorith2.timer_three < 0){
                            aorith2.timer_value_three = false;
                            aorith2.timer_value_four = true;
                        }
                    

                    
                        if(aorith2.timer_value_four === true){
                            aorith2.timer_four -= 1;
                            aorith2.y -= aorith2.vel.y;
                            aorith2.x -= (Math.random()*2)*aorith2.vel.x;
                        }

                        if(aorith2.timer_four < 0){
                            aorith2.timer_value_four = false;
                            aorith2.timer_value_three = false;
                            aorith2.timer_value_two = false;

                            aorith2.timer_value_one = true;

                            aorith2.timer = (Math.random()*40);
                            aorith2.timer_two = (Math.random()*40);
                            aorith2.timer_three = (Math.random()*40);
                            aorith2.timer_four = (Math.random()*40); 
                        }
                
                        if (this.y < 0){
                            this.vel.y *= -1;
                            this.y += (this.side/32);
                        } else if(this.y+this.side > HEIGHT){
                            this.vel.y *= -1;
                            this.y -= (this.side/32);
                        } else

                        if (this.x < 0){
                            this.vel.x *= -1;
                            this.x += (this.side/32);
                        } else if(this.x+this.side > WIDTH){
                            this.vel.x *= -1;
                            this.x -= (this.side/32);
                        };   
                };
                

                if(this.hp < 0){
                    exp += 14;
                    this.hp = 1000;
                    this.alive = false;
                    this.vannish();

                };

            },

            draw: function(){
                ctx.drawImage(star_img, this.x, this.y, this.side, this.side);
            }
        };
        
        var aorith3 = {
            x: null,
            y: null,
            side: 44,
            speed: 6,
            vel: null,
            hp: null,
            alive: true,
            timer_value_one: true,
            timer_value_two: false,
            timer_value_three: false,
            timer_value_four: false,
            timer: (Math.random()*40),
            timer_two: (Math.random()*40),
            timer_three: (Math.random()*40),
            timer_four: (Math.random()*40),
 
            vannish: function(){
                this.x = -1000;
            },

            update: function(){
                
                if(this.alive === true){
                    
                        aorith3.timer -= 1;
                    

                        if(aorith3.timer_value_one = true){
                            aorith3.x += aorith3.vel.x;
                        }
                        
                        if(aorith3.timer < 0){
                            aorith3.timer_value_one = false;
                            aorith3.timer_value_two = true;
                        }
                    
                    
                        if(aorith3.timer_value_two === true){
                            aorith3.timer_two -= 1;
                            aorith3.y += aorith3.vel.y;
                        }

                        if(aorith3.timer_two < 0){
                            aorith3.timer_value_two = false;
                            aorith3.timer_value_three = true;
                            
                            
                        }
                    

                    
                        if(aorith3.timer_value_three === true){
                            aorith3.timer_three -= 1;
                            aorith3.x -= aorith3.vel.x;
                            aorith3.y -= aorith3.vel.y;
                        }

                        if(aorith3.timer_three < 0){
                            aorith3.timer_value_three = false;
                            aorith3.timer_value_four = true;
                        }
                    

                    
                        if(aorith3.timer_value_four === true){
                            aorith3.timer_four -= 1;
                            aorith3.y -= aorith3.vel.y;
                            aorith3.x -= (Math.random()*2)*aorith3.vel.x;
                        }

                        if(aorith3.timer_four < 0){
                            aorith3.timer_value_four = false;
                            aorith3.timer_value_three = false;
                            aorith3.timer_value_two = false;

                            aorith3.timer_value_one = true;

                            aorith3.timer = (Math.random()*40);
                            aorith3.timer_two = (Math.random()*40);
                            aorith3.timer_three = (Math.random()*40);
                            aorith3.timer_four = (Math.random()*40); 
                        }
                
                        if (this.y < 0){
                            this.vel.y *= -1;
                            this.y += (this.side/32);
                        } else if(this.y+this.side > HEIGHT){
                            this.vel.y *= -1;
                            this.y -= (this.side/32);
                        } else

                        if (this.x < 0){
                            this.vel.x *= -1;
                            this.x += (this.side/32);
                        } else if(this.x+this.side > WIDTH){
                            this.vel.x *= -1;
                            this.x -= (this.side/32);
                        };
               
                };
                

                if(this.hp < 0){
                    exp += 14;
                    this.hp = 1000;
                    this.alive = false;
                    if(this.alive === false && level === 14){
                        attackBoost.x = this.x + 8;
                        attackBoost.y = this.y + 8;
                    };
                    
                    this.vannish();

                };

            },

            draw: function(){
                ctx.drawImage(star_img, this.x, this.y, this.side, this.side);
            }
        };
        
        var aorith4 = {
            x: null,
            y: null,
            side: 44,
            speed: 6,
            vel: null,
            hp: null,
            alive: true,
            timer_value_one: true,
            timer_value_two: false,
            timer_value_three: false,
            timer_value_four: false,
            timer: (Math.random()*40),
            timer_two: (Math.random()*40),
            timer_three: (Math.random()*40),
            timer_four: (Math.random()*40),
 
            vannish: function(){
                this.x = -1000;
                this.y = -10000;
            },

            update: function(){
                
                if(this.alive === true){
                    
                        aorith4.timer -= 1;
                    

                        if(aorith4.timer_value_one = true){
                            aorith4.x += aorith4.vel.x;
                        }
                        
                        if(aorith4.timer < 0){
                            aorith4.timer_value_one = false;
                            aorith4.timer_value_two = true;
                        }
                    
                    
                        if(aorith4.timer_value_two === true){
                            aorith4.timer_two -= 1;
                            aorith4.y += aorith4.vel.y;
                        }

                        if(aorith4.timer_two < 0){
                            aorith4.timer_value_two = false;
                            aorith4.timer_value_three = true;
                        }
                    
                        if(aorith4.timer_value_three === true){
                            aorith4.timer_three -= 1;
                            aorith4.x -= aorith4.vel.x;
                            aorith4.y -= aorith4.vel.y;
                        }

                        if(aorith4.timer_three < 0){
                            aorith4.timer_value_three = false;
                            aorith4.timer_value_four = true;
                        }

                        if(aorith4.timer_value_four === true){
                            aorith4.timer_four -= 1;
                            aorith4.y -= aorith4.vel.y;
                            aorith4.x -= (Math.random()*2)*aorith4.vel.x;
                        }

                        if(aorith4.timer_four < 0){
                            aorith4.timer_value_four = false;
                            aorith4.timer_value_three = false;
                            aorith4.timer_value_two = false;

                            aorith4.timer_value_one = true;

                            aorith4.timer = (Math.random()*40);
                            aorith4.timer_two = (Math.random()*40);
                            aorith4.timer_three = (Math.random()*40);
                            aorith4.timer_four = (Math.random()*40); 
                        }
                
                        if (this.y < 0){
                            this.vel.y *= -1;
                            this.y += (this.side/32);
                        } else if(this.y+this.side > HEIGHT){
                            this.vel.y *= -1;
                            this.y -= (this.side/32);
                        } else

                        if (this.x < 0){
                            this.vel.x *= -1;
                            this.x += (this.side/32);
                        } else if(this.x+this.side > WIDTH){
                            this.vel.x *= -1;
                            this.x -= (this.side/32);
                        };
               
                };
                

                if(this.hp < 0){
                    exp += 14;
                    this.hp = 1000;
                    this.alive = false;
                    this.vannish();

                };

            },

            draw: function(){
                ctx.drawImage(star_img, this.x, this.y, this.side, this.side);
            }
        };
        
        var turret = {
            x: null,
            y: null,
            side: 40,
            speed: 0,
            vel: null,
            hp: null,
            alive: true,
            count: 0,

            vannish: function(){
                this.x = -1000;
                this.y = -10000;
            },

            update: function(){
                if(lazer.x > WIDTH){
                    lazer.x = this.x-34;
                    lazer.y = this.y+(this.side/2.5);
                };

                if(this.hp < 0){
                    exp += 15;
                    this.hp = 1000;
                    this.vannish();
                };

            },

            draw: function(){
                ctx.fillStyle = "black";
                ctx.fillRect(this.x, this.y, this.side, this.side);
            }
        };
        
        var turret2 = {
            x: null,
            y: null,
            side: 40,
            speed: 0,
            vel: null,
            hp: null,
            alive: true,
            count: 0,

            vannish: function(){
                this.x = -1000;
                this.y = -10000;
            },

            update: function(){
                if(lazer2.x < -1*(this.side)){
                    lazer2.x = this.x+34;
                    lazer2.y = this.y+(this.side/2.5);
                };

                if(this.hp < 0){
                    exp += 15;
                    this.hp = 1000;
                    this.vannish();
                };

            },

            draw: function(){
                ctx.fillStyle = "black";
                ctx.fillRect(this.x, this.y, this.side, this.side);
            }
        };
        
        var turret3 = {
            x: null,
            y: null,
            side: 40,
            speed: 0,
            vel: null,
            hp: null,
            alive: true,
            count: 0,

            vannish: function(){
                this.x = -1000;
                this.y = -10000;
            },

            update: function(){
                if(lazer3.x > WIDTH){
                    lazer3.x = this.x-34;
                    lazer3.y = this.y+(this.side/2.5);
                };

                if(this.hp < 0){
                    exp += 15;
                    this.hp = 1000;
                    this.vannish();
                };

            },

            draw: function(){
                ctx.fillStyle = "black";
                ctx.fillRect(this.x, this.y, this.side, this.side);
            }
        };
        
        var turret4 = {
            x: null,
            y: null,
            side: 40,
            speed: 0,
            vel: null,
            hp: null,
            alive: true,
            count: 0,

            vannish: function(){
                this.x = -1000;
                this.y = -10000;
            },

            update: function(){
                if(lazer4.x < 0){
                    lazer4.x = this.x+34;
                    lazer4.y = this.y+(this.side/2.5);
                };

                if(this.hp < 0){
                    exp += 15;
                    this.hp = 1000;
                    this.vannish();
                };

            },

            draw: function(){
                ctx.fillStyle = "black";
                ctx.fillRect(this.x, this.y, this.side, this.side);
            }
        };
        
        var lazer = {
            x: null,
            y: null,
            width: 34,
            height: 10,
            speed: 20,
            vel: null,
            hp: null,
            alive: true,

            vannish: function(){
                this.x = -1000;
                this.y = -1000;
            },

            update: function(){
                this.x += this.vel.x;

                if(this.hp < 0){
                    exp += 1;
                    this.vannish();
                    this.hp = 1000;
                    this.alive = false;

                };

            },

            draw: function(){
                ctx.fillStyle = "rgba(255, 0, 0, 0.35)";
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        };
        
        var lazer2 = {
            x: null,
            y: null,
            width: 34,
            height: 10,
            speed: 20,
            vel: null,
            hp: null,
            alive: true,

            vannish: function(){
                this.x = -1000;
                this.y = -1000;
            },

            update: function(){
                this.x -= this.vel.x;

                if(this.hp < 0){
                    exp += 1;
                    this.vannish();
                    this.hp = 1000;
                    this.alive = false;
                };

            },

            draw: function(){
                ctx.fillStyle = "rgba(255, 0, 0, 0.35)";
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        };
        
        var lazer3 = {
            x: null,
            y: null,
            width: 34,
            height: 10,
            speed: 20,
            vel: null,
            hp: null,
            alive: true,

            vannish: function(){
                this.x = -1000;
                this.y = -1000;
            },

            update: function(){
                this.x += this.vel.x;

                if(this.hp < 0){
                    exp += 1;
                    this.vannish();
                    this.hp = 1000;
                    this.alive = false;
                };

            },

            draw: function(){
                ctx.fillStyle = "rgba(255, 0, 0, 0.35)";
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        };
        var lazer4 = {
            x: null,
            y: null,
            width: 34,
            height: 10,
            speed: 20,
            vel: null,
            hp: null,
            alive: true,

            vannish: function(){
                this.x = -1000;
                this.y = -1000;
            },

            update: function(){
                this.x -= this.vel.x;

                if(this.hp < 0){
                    exp += 1;
                    this.vannish();
                    this.hp = 1000;
                    this.alive = false;
                };

            },

            draw: function(){
                ctx.fillStyle = "rgba(255, 0, 0, 0.35)";
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        };
    
        // Image Objects

        var img1 = new Image();
        img1.src = 'grass.png';

        var img2 = new Image();
        img2.src = 'wood.jpg';

        var img3 = {
            x: null,
            y: null,
            width: 130,
            height: 50,

            vannish: function(){
                this.x = 1000;
                this.y = 1000;
            },

            update: function(){ //Check Collisions
                var AABBIntersect = function(ax, ay, aw, ah, bx, by, bw, bh){
                    return ax < bx+bw && ay < by+bh && bx < ax+aw && by < ay+ah;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, this.x, this.y, this.width, this.height)){
                    fadein_block.transition = true;
                    level++;
                    level2();
                    this.vannish();
                };

                // Item Collisions
                if(AABBIntersect(player.x, player.y, player.width, player.height, healthBox.x, healthBox.y, healthBox.side, healthBox.side)){
                    if(health === maxhealth){
                        health += 0;
                    } else if(health < maxhealth && health > (maxhealth / 2)){
                        health = maxhealth;
                    } else if(health <= (maxhealth / 2)){
                        health += Math.floor((maxhealth / 2));
                    } else {
                        health += 0;
                    };
                    
                    ching.play();

                    healthBox.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox.x, expBox.y, expBox.side, expBox.side)){
                    exp += 25;
                    ching.play();

                    expBox.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox2.x, expBox2.y, expBox2.side, expBox2.side)){
                    exp += 25;
                    ching.play();

                    expBox2.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox3.x, expBox3.y, expBox3.side, expBox3.side)){
                    exp += 25;
                    ching.play();

                    expBox3.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, speedBoost.x, speedBoost.y, speedBoost.side, speedBoost.side)){
                    speed += 0.25;
                    ching.play();

                    speedBoost.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, attackBoost.x, attackBoost.y, attackBoost.side, attackBoost.side)){
                    attack += 4;
                    ching.play();

                    attackBoost.vannish();
                };


                // Ai collisions
                if(AABBIntersect(player.x, player.y, player.width, player.height, ai.x, ai.y, ai.side, ai.side)){
                    health--;
                    helicopter.play();
                }
                if(AABBIntersect(player.x, player.y, player.width, player.height, ai2.x, ai2.y, ai2.side, ai2.side)){
                    health--;
                    helicopter.play();
                }

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai2.x, ai2.y, ai2.side, ai2.side)){
                    ai2.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai.x, ai.y, ai.side, ai.side)){
                    ai.hp -= spell.damage;
                    lazer_sound.play();
                };

            },

            draw: function(){
                ctx.fillStyle = 'black';
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        };

        var level2_block = {
            x: null,
            y: null,
            width: 130,
            height: 50,

            vannish: function(){
                this.x = 1000;
                this.y = 1000;
            },

            update: function(){ //Check Collisions
                var AABBIntersect = function(ax, ay, aw, ah, bx, by, bw, bh){
                    return ax < bx+bw && ay < by+bh && bx < ax+aw && by < ay+ah;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, this.x, this.y, this.width, this.height)){
                    fadein_block.transition = true;
                    level++;
                    level3();
                    this.vannish();
                };

                // Item Collisions
                if(AABBIntersect(player.x, player.y, player.width, player.height, healthBox.x, healthBox.y, healthBox.side, healthBox.side)){
                    if(health === maxhealth){
                        health += 0;
                    } else if(health < maxhealth && health > (maxhealth / 2)){
                        health = maxhealth;
                    } else if(health <= (maxhealth / 2)){
                        health += Math.floor((maxhealth / 2));
                    } else {
                        health += 0;
                    };
                    
                    ching.play();

                    healthBox.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox.x, expBox.y, expBox.side, expBox.side)){
                    exp += 25;
                    ching.play();

                    expBox.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox2.x, expBox2.y, expBox2.side, expBox2.side)){
                    exp += 25;
                    ching.play();

                    expBox2.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox3.x, expBox3.y, expBox3.side, expBox3.side)){
                    exp += 25;
                    ching.play();

                    expBox3.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, speedBoost.x, speedBoost.y, speedBoost.side, speedBoost.side)){
                    speed += 0.25;
                    ching.play();

                    speedBoost.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, attackBoost.x, attackBoost.y, attackBoost.side, attackBoost.side)){
                    attack += 4;
                    ching.play();

                    attackBoost.vannish();
                };


                // Ai Collisions
                if(AABBIntersect(player.x, player.y, player.width, player.height, ai.x, ai.y, ai.side, ai.side)){
                    helicopter.play();
                    health--;
                }

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai2.x, ai2.y, ai2.side, ai2.side)){
                    helicopter.play();
                    health--;
                }

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai3.x, ai3.y, ai3.side, ai3.side)){
                    helicopter.play();
                    health--;
                }

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai4.x, ai4.y, ai4.side, ai4.side)){
                    helicopter.play();
                    health--;
                } 
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, ai7.x, ai7.y, ai7.side, ai7.side)){
                    helicopter.play();
                    health--;
                }
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai2.x, ai2.y, ai2.side, ai2.side)){
                    ai2.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai.x, ai.y, ai.side, ai.side)){
                    ai.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai3.x, ai3.y, ai3.side, ai3.side)){
                    ai3.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai4.x, ai4.y, ai4.side, ai4.side)){
                    ai4.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai7.x, ai7.y, ai7.side, ai7.side)){
                    ai7.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(count > 3){
                    healthBox.x = 200;
                    healthBox.y = 200;

                    count = 0;
                };

            },

            draw: function(){
                ctx.fillStyle = 'black';
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        };

        var level3_block = {
            x: null,
            y: null,
            width: 130,
            height: 50,

            vannish: function(){
                this.x = 1000;
                this.y = 1000;
            },

            update: function(){ //Check Collisions
                var AABBIntersect = function(ax, ay, aw, ah, bx, by, bw, bh){
                    return ax < bx+bw && ay < by+bh && bx < ax+aw && by < ay+ah;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, this.x, this.y, this.width, this.height)){
                    fadein_block.transition = true;
                    level++;
                    level4();
                    this.vannish();
                };

                // Item Collisions
                if(AABBIntersect(player.x, player.y, player.width, player.height, healthBox.x, healthBox.y, healthBox.side, healthBox.side)){
                    if(health === maxhealth){
                        health += 0;
                    } else if(health < maxhealth && health > (maxhealth / 2)){
                        health = maxhealth;
                    } else if(health <= (maxhealth / 2)){
                        health += Math.floor((maxhealth / 2));
                    } else {
                        health += 0;
                    };
                    
                    ching.play();

                    healthBox.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox.x, expBox.y, expBox.side, expBox.side)){
                    exp += 25;
                    ching.play();

                    expBox.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox2.x, expBox2.y, expBox2.side, expBox2.side)){
                    exp += 25;
                    ching.play();

                    expBox2.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox3.x, expBox3.y, expBox3.side, expBox3.side)){
                    exp += 25;
                    ching.play();

                    expBox3.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, speedBoost.x, speedBoost.y, speedBoost.side, speedBoost.side)){
                    speed += 0.25;
                    ching.play();

                    speedBoost.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, attackBoost.x, attackBoost.y, attackBoost.side, attackBoost.side)){
                    attack += 4;
                    ching.play();

                    attackBoost.vannish();
                };


                // Ai Collisions

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai.x, ai.y, ai.side, ai.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai8.x, ai8.y, ai8.side, ai8.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai5.x, ai5.y, ai5.side, ai5.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai2.x, ai2.y, ai2.side, ai2.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai3.x, ai3.y, ai3.side, ai3.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai4.x, ai4.y, ai4.side, ai4.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai2.x, ai2.y, ai2.side, ai2.side)){
                    ai2.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai.x, ai.y, ai.side, ai.side)){
                    ai.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai3.x, ai3.y, ai3.side, ai3.side)){
                    ai3.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai4.x, ai4.y, ai4.side, ai4.side)){
                    ai4.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai8.x, ai8.y, ai8.side, ai8.side)){
                    ai8.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai5.x, ai5.y, ai5.side, ai5.side)){
                    ai5.hp -= spell.damage;
                    lazer_sound.play();
                };

            },

            draw: function(){
                ctx.fillStyle = 'black';
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        };

        var level4_block = {
            x: null,
            y: null,
            width: 130,
            height: 50,

            vannish: function(){
                this.x = 1000;
                this.y = 1000;
            },

            update: function(){ 
                //Check Collisions
                var AABBIntersect = function(ax, ay, aw, ah, bx, by, bw, bh){
                    return ax < bx+bw && ay < by+bh && bx < ax+aw && by < ay+ah;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, this.x, this.y, this.width, this.height)){
                    fadein_block.transition = true;
                    level++;
                    level5();
                    this.vannish();
                };

                // Item Collisions
                if(AABBIntersect(player.x, player.y, player.width, player.height, healthBox.x, healthBox.y, healthBox.side, healthBox.side)){
                    if(health === maxhealth){
                        health += 0;
                    } else if(health < maxhealth && health > (maxhealth / 2)){
                        health = maxhealth;
                    } else if(health <= (maxhealth / 2)){
                        health += Math.floor((maxhealth / 2));
                    } else {
                        health += 0;
                    };
                    
                    ching.play();

                    healthBox.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox.x, expBox.y, expBox.side, expBox.side)){
                    exp += 25;
                    ching.play();

                    expBox.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox2.x, expBox2.y, expBox2.side, expBox2.side)){
                    exp += 25;
                    ching.play();

                    expBox2.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox3.x, expBox3.y, expBox3.side, expBox3.side)){
                    exp += 25;
                    ching.play();

                    expBox3.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, speedBoost.x, speedBoost.y, speedBoost.side, speedBoost.side)){
                    speed += 0.25;
                    ching.play();

                    speedBoost.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, attackBoost.x, attackBoost.y, attackBoost.side, attackBoost.side)){
                    attack += 4;
                    ching.play();

                    attackBoost.vannish();
                };


                // Ai Collisions

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai.x, ai.y, ai.side, ai.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai2.x, ai2.y, ai2.side, ai2.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai3.x, ai3.y, ai3.side, ai3.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai4.x, ai4.y, ai4.side, ai4.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai5.x, ai5.y, ai5.side, ai5.side)){
                    helicopter.play();
                    health -= 2;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai6.x, ai6.y, ai6.side, ai6.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai7.x, ai7.y, ai7.side, ai7.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai2.x, ai2.y, ai2.side, ai2.side)){
                    ai2.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai.x, ai.y, ai.side, ai.side)){
                    ai.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai3.x, ai3.y, ai3.side, ai3.side)){
                    ai3.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai4.x, ai4.y, ai4.side, ai4.side)){
                    ai4.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai5.x, ai5.y, ai5.side, ai5.side)){
                    ai5.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai6.x, ai6.y, ai6.side, ai6.side)){
                    ai6.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai7.x, ai7.y, ai7.side, ai7.side)){
                    ai7.hp -= spell.damage;
                    lazer_sound.play();
                };

                //Check Enemies 
                if(count > 6){
                    expBox.x = 24;
                    expBox.y = 300;

                    speedBoost.x = 288;
                    speedBoost.y = 400;

                    count = 0;
                };
            },

            draw: function(){
                ctx.fillStyle = 'black';
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        };

        var level5_block = {
            x: null,
            y: null,
            width: 130,
            height: 50,

            vannish: function(){
                this.x = 1000;
                this.y = 1000;
            },

            update: function(){ //Check Collisions
                var AABBIntersect = function(ax, ay, aw, ah, bx, by, bw, bh){
                    return ax < bx+bw && ay < by+bh && bx < ax+aw && by < ay+ah;
                };

                if(boss_jr.bool === true){
                    if(AABBIntersect(player.x, player.y, player.width, player.height, this.x, this.y, this.width, this.height)){
                        fadein_block.transition = true;
                        level++;
                        level6();
                        this.vannish();
                    };
                };

                // Item Collisions
                if(AABBIntersect(player.x, player.y, player.width, player.height, healthBox.x, healthBox.y, healthBox.side, healthBox.side)){
                    if(health === maxhealth){
                        health += 0;
                    } else if(health < maxhealth && health > (maxhealth / 2)){
                        health = maxhealth;
                    } else if(health <= (maxhealth / 2)){
                        health += Math.floor((maxhealth / 2));
                    } else {
                        health += 0;
                    };
                    
                    ching.play();

                    healthBox.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox.x, expBox.y, expBox.side, expBox.side)){
                    exp += 25;
                    ching.play();

                    expBox.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox2.x, expBox2.y, expBox2.side, expBox2.side)){
                    exp += 25;
                    ching.play();

                    expBox2.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox3.x, expBox3.y, expBox3.side, expBox3.side)){
                    exp += 25;
                    ching.play();

                    expBox3.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, speedBoost.x, speedBoost.y, speedBoost.side, speedBoost.side)){
                    speed += 0.25;
                    ching.play();

                    speedBoost.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, attackBoost.x, attackBoost.y, attackBoost.side, attackBoost.side)){
                    attack += 4;
                    ching.play();

                    attackBoost.vannish();
                };


                // Ai Collisions

                if(AABBIntersect(player.x, player.y, player.width, player.height, boss_jr.x, boss_jr.y, boss_jr.side, boss_jr.side)){
                    helicopter.play();
                    health -= 3;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, block_1.x, block_1.y, block_1.side, block_1.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, block_2.x, block_2.y, block_2.side, block_2.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, block_3.x, block_3.y, block_3.side, block_3.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, block_4.x, block_4.y, block_4.side, block_4.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, block_5.x, block_5.y, block_5.side, block_5.side)){
                    helicopter.play();
                    health -= 1;
                };

                

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), block_1.x, block_1.y, block_1.side, block_1.side)){
                    block_1.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), block_2.x, block_2.y, block_2.side, block_2.side)){
                    block_2.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), block_3.x, block_3.y, block_3.side, block_3.side)){
                    block_3.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), block_4.x, block_4.y, block_4.side, block_4.side)){
                    block_4.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), block_5.x, block_5.y, block_5.side, block_5.side)){
                    block_5.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), boss_jr.x, boss_jr.y, boss_jr.side, boss_jr.side)){
                    boss_jr.hp -= spell.damage;
                    lazer_sound.play();
                };
            },

            draw: function(){
                ctx.fillStyle = 'black';
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        };

        var level6_block = {
            x: null,
            y: null,
            width: 130,
            height: 50,

            vannish: function(){
                this.x = 1000;
                this.y = 1000;
            },

            update: function(){ 
                //Check Collisions
                var AABBIntersect = function(ax, ay, aw, ah, bx, by, bw, bh){
                    return ax < bx+bw && ay < by+bh && bx < ax+aw && by < ay+ah;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, this.x, this.y, this.width, this.height)){
                    fadein_block.transition = true;
                    level++;
                    level7();
                    this.vannish();
                };

                // Item Collisions
                if(AABBIntersect(player.x, player.y, player.width, player.height, healthBox.x, healthBox.y, healthBox.side, healthBox.side)){
                    if(health === maxhealth){
                        health += 0;
                    } else if(health < maxhealth && health > (maxhealth / 2)){
                        health = maxhealth;
                    } else if(health <= (maxhealth / 2)){
                        health += Math.floor((maxhealth / 2));
                    } else {
                        health += 0;
                    };
                    
                    ching.play();

                    healthBox.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox.x, expBox.y, expBox.side, expBox.side)){
                    exp += 25;
                    ching.play();

                    expBox.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox2.x, expBox2.y, expBox2.side, expBox2.side)){
                    exp += 25;
                    ching.play();

                    expBox2.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox3.x, expBox3.y, expBox3.side, expBox3.side)){
                    exp += 25;
                    ching.play();

                    expBox3.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, speedBoost.x, speedBoost.y, speedBoost.side, speedBoost.side)){
                    speed += 0.25;
                    ching.play();

                    speedBoost.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, attackBoost.x, attackBoost.y, attackBoost.side, attackBoost.side)){
                    attack += 4;
                    ching.play();

                    attackBoost.vannish();
                };


                // Ai Collisions

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai.x, ai.y, ai.side, ai.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai2.x, ai2.y, ai2.side, ai2.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai3.x, ai3.y, ai3.side, ai3.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai4.x, ai4.y, ai4.side, ai4.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai5.x, ai5.y, ai5.side, ai5.side)){
                    helicopter.play();
                    health -= 2;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai6.x, ai6.y, ai6.side, ai6.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai7.x, ai7.y, ai7.side, ai7.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai8.x, ai8.y, ai8.side, ai8.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai9.x, ai9.y, ai9.side, ai9.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai10.x, ai10.y, ai10.side, ai10.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai11.x, ai11.y, ai11.side, ai11.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai2.x, ai2.y, ai2.side, ai2.side)){
                    ai2.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai.x, ai.y, ai.side, ai.side)){
                    ai.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai3.x, ai3.y, ai3.side, ai3.side)){
                    ai3.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai4.x, ai4.y, ai4.side, ai4.side)){
                    ai4.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai5.x, ai5.y, ai5.side, ai5.side)){
                    ai5.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai6.x, ai6.y, ai6.side, ai6.side)){
                    ai6.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai7.x, ai7.y, ai7.side, ai7.side)){
                    ai7.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai9.x, ai9.y, ai9.side, ai9.side)){
                    ai9.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai10.x, ai10.y, ai10.side, ai10.side)){
                    ai10.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai11.x, ai11.y, ai11.side, ai11.side)){
                    ai11.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai8.x, ai8.y, ai8.side, ai8.side)){
                    ai8.hp -= spell.damage;
                    lazer_sound.play();
                };

            },

            draw: function(){
                ctx.fillStyle = 'black';
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        };

        var level7_block = {
            x: null,
            y: null,
            width: 130,
            height: 50,

            vannish: function(){
                this.x = 1000;
                this.y = 1000;
            },

            update: function(){ 
                //Check Collisions
                var AABBIntersect = function(ax, ay, aw, ah, bx, by, bw, bh){
                    return ax < bx+bw && ay < by+bh && bx < ax+aw && by < ay+ah;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, this.x, this.y, this.width, this.height)){
                    fadein_block.transition = true;
                    level++;
                    level8();
                    this.vannish();
                };

                // Item Collisions
                if(AABBIntersect(player.x, player.y, player.width, player.height, healthBox.x, healthBox.y, healthBox.side, healthBox.side)){
                    if(health === maxhealth){
                        health += 0;
                    } else if(health < maxhealth && health > (maxhealth / 2)){
                        health = maxhealth;
                    } else if(health <= (maxhealth / 2)){
                        health += Math.floor((maxhealth / 2));
                    } else {
                        health += 0;
                    };
                    
                    ching.play();

                    healthBox.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox.x, expBox.y, expBox.side, expBox.side)){
                    exp += 25;
                    ching.play();

                    expBox.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox2.x, expBox2.y, expBox2.side, expBox2.side)){
                    exp += 25;
                    ching.play();

                    expBox2.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox3.x, expBox3.y, expBox3.side, expBox3.side)){
                    exp += 25;
                    ching.play();

                    expBox3.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, speedBoost.x, speedBoost.y, speedBoost.side, speedBoost.side)){
                    speed += 0.25;
                    ching.play();

                    speedBoost.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, attackBoost.x, attackBoost.y, attackBoost.side, attackBoost.side)){
                    attack += 4;
                    ching.play();

                    attackBoost.vannish();
                };


                // Ai Collisions                

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai6.x, ai6.y, ai6.side, ai6.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, guard.x,guard.y, guard.side, guard.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ball.x, ball.y, ball.side, ball.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, cannon.x, cannon.y, cannon.side, cannon.side)){
                    helicopter.play();
                    health -= 1;
                };


                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai6.x, ai6.y, ai6.side, ai6.side)){
                    ai6.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), cannon.x, cannon.y, cannon.side, cannon.side)){
                    cannon.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ball.x, ball.y, ball.side, ball.side)){
                    ball.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), guard.x, guard.y, guard.side, guard.side)){
                    guard.hp -= spell.damage;
                    lazer_sound.play();
                };


            },

            draw: function(){
                ctx.fillStyle = 'black';
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        };

        var level8_block = {
            x: null,
            y: null,
            width: 130,
            height: 50,

            vannish: function(){
                this.x = 1000;
                this.y = 1000;
            },

            update: function(){ 
                //Check Collisions
                var AABBIntersect = function(ax, ay, aw, ah, bx, by, bw, bh){
                    return ax < bx+bw && ay < by+bh && bx < ax+aw && by < ay+ah;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, this.x, this.y, this.width, this.height)){
                    fadein_block.transition = true;
                    level++;
                    level9();
                    this.vannish();
                };

                // Item Collisions
                if(AABBIntersect(player.x, player.y, player.width, player.height, healthBox.x, healthBox.y, healthBox.side, healthBox.side)){
                    if(health === maxhealth){
                        health += 0;
                    } else if(health < maxhealth && health > (maxhealth / 2)){
                        health = maxhealth;
                    } else if(health <= (maxhealth / 2)){
                        health += Math.floor((maxhealth / 2));
                    } else {
                        health += 0;
                    };
                    
                    ching.play();

                    healthBox.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox.x, expBox.y, expBox.side, expBox.side)){
                    exp += 25;
                    ching.play();

                    expBox.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox2.x, expBox2.y, expBox2.side, expBox2.side)){
                    exp += 25;
                    ching.play();

                    expBox2.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox3.x, expBox3.y, expBox3.side, expBox3.side)){
                    exp += 25;
                    ching.play();

                    expBox3.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, speedBoost.x, speedBoost.y, speedBoost.side, speedBoost.side)){
                    speed += 0.25;
                    ching.play();

                    speedBoost.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, attackBoost.x, attackBoost.y, attackBoost.side, attackBoost.side)){
                    attack += 4;
                    ching.play();

                    attackBoost.vannish();
                };


                // Ai Collisions                

                if(AABBIntersect(player.x, player.y, player.width, player.height, ball.x, ball.y, ball.side, ball.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, cannon.x, cannon.y, cannon.side, cannon.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai5.x, ai5.y, ai5.side, ai5.side)){
                    helicopter.play();
                    health -= 2;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ninja1.x, ninja1.y, ninja1.side, ninja1.side)){
                    helicopter.play();
                    health -= 2;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ninja2.x, ninja2.y, ninja2.side, ninja2.side)){
                    helicopter.play();
                    health -= 2;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai.x, ai.y, ai.side, ai.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, soldier.x, soldier.y, soldier.side, soldier.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai7.x, ai7.y, ai7.side, ai7.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai8.x, ai8.y, ai8.side, ai8.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai2.x, ai2.y, ai2.side, ai2.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai3.x, ai3.y, ai3.side, ai3.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai4.x, ai4.y, ai4.side, ai4.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), cannon.x, cannon.y, cannon.side, cannon.side)){
                    cannon.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ball.x, ball.y, ball.side, ball.side)){
                    ball.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai5.x, ai5.y, ai5.side, ai5.side)){
                    ai5.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ninja1.x, ninja1.y, ninja1.side, ninja1.side)){
                    ninja1.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), soldier.x, soldier.y, soldier.side, soldier.side)){
                    soldier.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ninja2.x, ninja2.y, ninja2.side, ninja2.side)){
                    ninja2.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai2.x, ai2.y, ai2.side, ai2.side)){
                    ai2.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai.x, ai.y, ai.side, ai.side)){
                    ai.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai3.x, ai3.y, ai3.side, ai3.side)){
                    ai3.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai4.x, ai4.y, ai4.side, ai4.side)){
                    ai4.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai8.x, ai8.y, ai8.side, ai8.side)){
                    ai8.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai7.x, ai7.y, ai7.side, ai7.side)){
                    ai7.hp -= spell.damage;
                    lazer_sound.play();
                };

            },

            draw: function(){
                ctx.fillStyle = 'black';
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        };

        var level9_block = {
            x: null,
            y: null,
            width: 130,
            height: 50,

            vannish: function(){
                this.x = 1000;
                this.y = 1000;
            },

            update: function(){ 
                //Check Collisions
                var AABBIntersect = function(ax, ay, aw, ah, bx, by, bw, bh){
                    return ax < bx+bw && ay < by+bh && bx < ax+aw && by < ay+ah;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, this.x, this.y, this.width, this.height)){
                    fadein_block.transition = true;
                    level++;
                    level10();
                    this.vannish();
                };

                // Item Collisions
                if(AABBIntersect(player.x, player.y, player.width, player.height, healthBox.x, healthBox.y, healthBox.side, healthBox.side)){
                    if(health === maxhealth){
                        health += 0;
                    } else if(health < maxhealth && health > (maxhealth / 2)){
                        health = maxhealth;
                    } else if(health <= (maxhealth / 2)){
                        health += Math.floor((maxhealth / 2));
                    } else {
                        health += 0;
                    };
                    
                    ching.play();

                    healthBox.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox.x, expBox.y, expBox.side, expBox.side)){
                    exp += 25;
                    ching.play();

                    expBox.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox2.x, expBox2.y, expBox2.side, expBox2.side)){
                    exp += 25;
                    ching.play();

                    expBox2.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox3.x, expBox3.y, expBox3.side, expBox3.side)){
                    exp += 25;
                    ching.play();

                    expBox3.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, speedBoost.x, speedBoost.y, speedBoost.side, speedBoost.side)){
                    speed += 0.25;
                    ching.play();

                    speedBoost.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, attackBoost.x, attackBoost.y, attackBoost.side, attackBoost.side)){
                    attack += 4;
                    ching.play();

                    attackBoost.vannish();
                };


                // Ai Collisions

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai6.x, ai6.y, ai6.side, ai6.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, guard.x,guard.y, guard.side, guard.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, jin.x, jin.y, jin.side, jin.side)){
                    helicopter.play();
                    health -= 1;
                };


                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai6.x, ai6.y, ai6.side, ai6.side)){
                    ai6.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), guard.x, guard.y, guard.side, guard.side)){
                    guard.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), jin.x, jin.y, jin.side, jin.side)){
                    jin.hp -= spell.damage;
                    lazer_sound.play();
                };

            },

            draw: function(){
                ctx.fillStyle = 'black';
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        };

        var level10_block = {
            x: null,
            y: null,
            width: 130,
            height: 50,

            vannish: function(){
                this.x = 1000;
                this.y = 1000;
            },

            update: function(){ 
                //Check Collisions
                var AABBIntersect = function(ax, ay, aw, ah, bx, by, bw, bh){
                    return ax < bx+bw && ay < by+bh && bx < ax+aw && by < ay+ah;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, this.x, this.y, this.width, this.height)){
                    fadein_block.transition = true;
                    level++;
                    level11();
                    this.vannish();
                };

                // Item Collisions
                if(AABBIntersect(player.x, player.y, player.width, player.height, healthBox.x, healthBox.y, healthBox.side, healthBox.side)){
                    if(health === maxhealth){
                        health += 0;
                    } else if(health < maxhealth && health > (maxhealth / 2)){
                        health = maxhealth;
                    } else if(health <= (maxhealth / 2)){
                        health += Math.floor((maxhealth / 2));
                    } else {
                        health += 0;
                    };
                    
                    ching.play();

                    healthBox.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox.x, expBox.y, expBox.side, expBox.side)){
                    exp += 25;
                    ching.play();

                    expBox.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox2.x, expBox2.y, expBox2.side, expBox2.side)){
                    exp += 25;
                    ching.play();

                    expBox2.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox3.x, expBox3.y, expBox3.side, expBox3.side)){
                    exp += 25;
                    ching.play();

                    expBox3.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, speedBoost.x, speedBoost.y, speedBoost.side, speedBoost.side)){
                    speed += 0.25;
                    ching.play();

                    speedBoost.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, attackBoost.x, attackBoost.y, attackBoost.side, attackBoost.side)){
                    attack += 4;
                    ching.play();

                    attackBoost.vannish();
                };


                // Ai Collisions

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai6.x, ai6.y, ai6.side, ai6.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, guard.x,guard.y, guard.side, guard.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, jin.x, jin.y, jin.side, jin.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, boss_sr.x, boss_sr.y, boss_sr.side, boss_sr.side)){
                    helicopter.play();
                    health -= 2;
                };


                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai6.x, ai6.y, ai6.side, ai6.side)){
                    ai6.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), guard.x, guard.y, guard.side, guard.side)){
                    guard.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), jin.x, jin.y, jin.side, jin.side)){
                    jin.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), boss_sr.x, boss_sr.y, boss_sr.side, boss_sr.side)){
                    boss_sr.hp -= spell.damage;
                    lazer_sound.play();
                };

            },

            draw: function(){
                ctx.fillStyle = 'black';
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        };
        
        var level11_block = {
            x: null,
            y: null,
            width: 130,
            height: 50,

            vannish: function(){
                this.x = 1000;
                this.y = 1000;
            },

            update: function(){ 
                //Check Collisions
                var AABBIntersect = function(ax, ay, aw, ah, bx, by, bw, bh){
                    return ax < bx+bw && ay < by+bh && bx < ax+aw && by < ay+ah;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, this.x, this.y, this.width, this.height)){
                    fadein_block.transition = true;
                    level++;
                    level12();
                    this.vannish();
                };

                // Item Collisions
                if(AABBIntersect(player.x, player.y, player.width, player.height, healthBox.x, healthBox.y, healthBox.side, healthBox.side)){
                    if(health === maxhealth){
                        health += 0;
                    } else if(health < maxhealth && health > (maxhealth / 2)){
                        health = maxhealth;
                    } else if(health <= (maxhealth / 2)){
                        health += Math.floor((maxhealth / 2));
                    } else {
                        health += 0;
                    };
                    
                    ching.play();

                    healthBox.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox.x, expBox.y, expBox.side, expBox.side)){
                    exp += 25;
                    ching.play();

                    expBox.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox2.x, expBox2.y, expBox2.side, expBox2.side)){
                    exp += 25;
                    ching.play();

                    expBox2.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox3.x, expBox3.y, expBox3.side, expBox3.side)){
                    exp += 25;
                    ching.play();

                    expBox3.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, speedBoost.x, speedBoost.y, speedBoost.side, speedBoost.side)){
                    speed += 0.25;
                    ching.play();

                    speedBoost.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, attackBoost.x, attackBoost.y, attackBoost.side, attackBoost.side)){
                    attack += 4;
                    ching.play();

                    attackBoost.vannish();
                };


                // Ai Collisions                

                if(AABBIntersect(player.x, player.y, player.width, player.height, ball.x, ball.y, ball.side, ball.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, cannon.x, cannon.y, cannon.side, cannon.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai5.x, ai5.y, ai5.side, ai5.side)){
                    helicopter.play();
                    health -= 2;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ninja1.x, ninja1.y, ninja1.side, ninja1.side)){
                    helicopter.play();
                    health -= 2;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ninja2.x, ninja2.y, ninja2.side, ninja2.side)){
                    helicopter.play();
                    health -= 2;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai.x, ai.y, ai.side, ai.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, soldier.x, soldier.y, soldier.side, soldier.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai7.x, ai7.y, ai7.side, ai7.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai8.x, ai8.y, ai8.side, ai8.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai2.x, ai2.y, ai2.side, ai2.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai3.x, ai3.y, ai3.side, ai3.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai4.x, ai4.y, ai4.side, ai4.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, ai6.x, ai6.y, ai6.side, ai6.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, boulder.x, boulder.y, boulder.side, boulder.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), cannon.x, cannon.y, cannon.side, cannon.side)){
                    cannon.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ball.x, ball.y, ball.side, ball.side)){
                    ball.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai5.x, ai5.y, ai5.side, ai5.side)){
                    ai5.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ninja1.x, ninja1.y, ninja1.side, ninja1.side)){
                    ninja1.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), soldier.x, soldier.y, soldier.side, soldier.side)){
                    soldier.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ninja2.x, ninja2.y, ninja2.side, ninja2.side)){
                    ninja2.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai2.x, ai2.y, ai2.side, ai2.side)){
                    ai2.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai.x, ai.y, ai.side, ai.side)){
                    ai.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai3.x, ai3.y, ai3.side, ai3.side)){
                    ai3.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai4.x, ai4.y, ai4.side, ai4.side)){
                    ai4.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai6.x, ai6.y, ai6.side, ai6.side)){
                    ai6.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai8.x, ai8.y, ai8.side, ai8.side)){
                    ai8.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai7.x, ai7.y, ai7.side, ai7.side)){
                    ai7.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), boulder.x, boulder.y, boulder.side, boulder.side)){
                    boulder.hp -= spell.damage;
                    lazer_sound.play();
                };

            },

            draw: function(){
                ctx.fillStyle = 'black';
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        };
        
        var level12_block = {
            x: null,
            y: null,
            width: 130,
            height: 50,

            vannish: function(){
                this.x = 1000;
                this.y = 1000;
            },

            update: function(){ 
                //Check Collisions
                var AABBIntersect = function(ax, ay, aw, ah, bx, by, bw, bh){
                    return ax < bx+bw && ay < by+bh && bx < ax+aw && by < ay+ah;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, this.x, this.y, this.width, this.height)){
                    fadein_block.transition = true;
                    level++;
                    level13();
                    this.vannish();
                };

                // Item Collisions
                if(AABBIntersect(player.x, player.y, player.width, player.height, healthBox.x, healthBox.y, healthBox.side, healthBox.side)){
                    if(health === maxhealth){
                        health += 0;
                    } else if(health < maxhealth && health > (maxhealth / 2)){
                        health = maxhealth;
                    } else if(health <= (maxhealth / 2)){
                        health += Math.floor((maxhealth / 2));
                    } else {
                        health += 0;
                    };
                    
                    ching.play();

                    healthBox.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox.x, expBox.y, expBox.side, expBox.side)){
                    exp += 25;
                    ching.play();

                    expBox.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox2.x, expBox2.y, expBox2.side, expBox2.side)){
                    exp += 25;
                    ching.play();

                    expBox2.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox3.x, expBox3.y, expBox3.side, expBox3.side)){
                    exp += 25;
                    ching.play();

                    expBox3.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, speedBoost.x, speedBoost.y, speedBoost.side, speedBoost.side)){
                    speed += 0.25;
                    ching.play();

                    speedBoost.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, attackBoost.x, attackBoost.y, attackBoost.side, attackBoost.side)){
                    attack += 4;
                    ching.play();

                    attackBoost.vannish();
                };


                // Ai Collisions                

                if(AABBIntersect(player.x, player.y, player.width, player.height, ball.x, ball.y, ball.side, ball.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, cannon.x, cannon.y, cannon.side, cannon.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai5.x, ai5.y, ai5.side, ai5.side)){
                    helicopter.play();
                    health -= 2;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ninja1.x, ninja1.y, ninja1.side, ninja1.side)){
                    helicopter.play();
                    health -= 2;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ninja2.x, ninja2.y, ninja2.side, ninja2.side)){
                    helicopter.play();
                    health -= 2;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai.x, ai.y, ai.side, ai.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, ai9.x, ai9.y, ai9.side, ai9.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, ai10.x, ai10.y, ai10.side, ai10.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, soldier.x, soldier.y, soldier.side, soldier.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai7.x, ai7.y, ai7.side, ai7.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai8.x, ai8.y, ai8.side, ai8.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai2.x, ai2.y, ai2.side, ai2.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai3.x, ai3.y, ai3.side, ai3.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai4.x, ai4.y, ai4.side, ai4.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, ai6.x, ai6.y, ai6.side, ai6.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, boulder.x, boulder.y, boulder.side, boulder.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, boulder2.x, boulder2.y, boulder2.side, boulder2.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), cannon.x, cannon.y, cannon.side, cannon.side)){
                    cannon.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ball.x, ball.y, ball.side, ball.side)){
                    ball.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai5.x, ai5.y, ai5.side, ai5.side)){
                    ai5.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ninja1.x, ninja1.y, ninja1.side, ninja1.side)){
                    ninja1.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), soldier.x, soldier.y, soldier.side, soldier.side)){
                    soldier.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ninja2.x, ninja2.y, ninja2.side, ninja2.side)){
                    ninja2.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai2.x, ai2.y, ai2.side, ai2.side)){
                    ai2.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai.x, ai.y, ai.side, ai.side)){
                    ai.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai9.x, ai9.y, ai9.side, ai9.side)){
                    ai9.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai10.x, ai10.y, ai10.side, ai10.side)){
                    ai10.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai3.x, ai3.y, ai3.side, ai3.side)){
                    ai3.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai4.x, ai4.y, ai4.side, ai4.side)){
                    ai4.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai6.x, ai6.y, ai6.side, ai6.side)){
                    ai6.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai8.x, ai8.y, ai8.side, ai8.side)){
                    ai8.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai7.x, ai7.y, ai7.side, ai7.side)){
                    ai7.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), boulder.x, boulder.y, boulder.side, boulder.side)){
                    boulder.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), boulder2.x, boulder2.y, boulder2.side, boulder2.side)){
                    boulder2.hp -= spell.damage;
                    lazer_sound.play();
                };

            },

            draw: function(){
                ctx.fillStyle = 'black';
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        };
        
        var level13_block = {
            x: null,
            y: null,
            width: 130,
            height: 50,

            vannish: function(){
                this.x = 1000;
                this.y = 1000;
            },

            update: function(){ 
                //Check Collisions
                var AABBIntersect = function(ax, ay, aw, ah, bx, by, bw, bh){
                    return ax < bx+bw && ay < by+bh && bx < ax+aw && by < ay+ah;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, this.x, this.y, this.width, this.height)){
                    fadein_block.transition = true;
                    level++;
                    level14();
                    this.vannish();
                };

                // Item Collisions
                if(AABBIntersect(player.x, player.y, player.width, player.height, healthBox.x, healthBox.y, healthBox.side, healthBox.side)){
                    if(health === maxhealth){
                        health += 0;
                    } else if(health < maxhealth && health > (maxhealth / 2)){
                        health = maxhealth;
                    } else if(health <= (maxhealth / 2)){
                        health += Math.floor((maxhealth / 2));
                    } else {
                        health += 0;
                    };
                    
                    ching.play();

                    healthBox.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox.x, expBox.y, expBox.side, expBox.side)){
                    exp += 25;
                    ching.play();

                    expBox.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox2.x, expBox2.y, expBox2.side, expBox2.side)){
                    exp += 25;
                    ching.play();

                    expBox2.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox3.x, expBox3.y, expBox3.side, expBox3.side)){
                    exp += 25;
                    ching.play();

                    expBox3.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, speedBoost.x, speedBoost.y, speedBoost.side, speedBoost.side)){
                    speed += 0.25;
                    ching.play();

                    speedBoost.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, attackBoost.x, attackBoost.y, attackBoost.side, attackBoost.side)){
                    attack += 4;
                    ching.play();

                    attackBoost.vannish();
                };


                // Ai Collisions                

                if(AABBIntersect(player.x, player.y, player.width, player.height, ball.x, ball.y, ball.side, ball.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, cannon.x, cannon.y, cannon.side, cannon.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai5.x, ai5.y, ai5.side, ai5.side)){
                    helicopter.play();
                    health -= 2;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ninja1.x, ninja1.y, ninja1.side, ninja1.side)){
                    helicopter.play();
                    health -= 2;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ninja2.x, ninja2.y, ninja2.side, ninja2.side)){
                    helicopter.play();
                    health -= 2;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai.x, ai.y, ai.side, ai.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, aorith.x, aorith.y, aorith.side, aorith.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, aorith2.x, aorith2.y, aorith2.side, aorith2.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, aorith3.x, aorith3.y, aorith3.side, aorith3.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, ai9.x, ai9.y, ai9.side, ai9.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, ai10.x, ai10.y, ai10.side, ai10.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, soldier.x, soldier.y, soldier.side, soldier.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai7.x, ai7.y, ai7.side, ai7.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai8.x, ai8.y, ai8.side, ai8.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai2.x, ai2.y, ai2.side, ai2.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai3.x, ai3.y, ai3.side, ai3.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai4.x, ai4.y, ai4.side, ai4.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, ai6.x, ai6.y, ai6.side, ai6.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, boulder.x, boulder.y, boulder.side, boulder.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, boulder2.x, boulder2.y, boulder2.side, boulder2.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), cannon.x, cannon.y, cannon.side, cannon.side)){
                    cannon.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ball.x, ball.y, ball.side, ball.side)){
                    ball.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai5.x, ai5.y, ai5.side, ai5.side)){
                    ai5.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ninja1.x, ninja1.y, ninja1.side, ninja1.side)){
                    ninja1.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), soldier.x, soldier.y, soldier.side, soldier.side)){
                    soldier.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ninja2.x, ninja2.y, ninja2.side, ninja2.side)){
                    ninja2.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai2.x, ai2.y, ai2.side, ai2.side)){
                    ai2.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai.x, ai.y, ai.side, ai.side)){
                    ai.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), aorith.x, aorith.y, aorith.side, aorith.side)){
                    aorith.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), aorith2.x, aorith2.y, aorith2.side, aorith2.side)){
                    aorith2.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), aorith3.x, aorith3.y, aorith3.side, aorith3.side)){
                    aorith3.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai9.x, ai9.y, ai9.side, ai9.side)){
                    ai9.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai10.x, ai10.y, ai10.side, ai10.side)){
                    ai10.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai3.x, ai3.y, ai3.side, ai3.side)){
                    ai3.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai4.x, ai4.y, ai4.side, ai4.side)){
                    ai4.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai6.x, ai6.y, ai6.side, ai6.side)){
                    ai6.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai8.x, ai8.y, ai8.side, ai8.side)){
                    ai8.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai7.x, ai7.y, ai7.side, ai7.side)){
                    ai7.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), boulder.x, boulder.y, boulder.side, boulder.side)){
                    boulder.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), boulder2.x, boulder2.y, boulder2.side, boulder2.side)){
                    boulder2.hp -= spell.damage;
                    lazer_sound.play();
                };

            },

            draw: function(){
                ctx.fillStyle = 'black';
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        };
        
        var level14_block = {
            x: null,
            y: null,
            width: 130,
            height: 50,

            vannish: function(){
                this.x = 1000;
                this.y = 1000;
            },

            update: function(){ 
                //Check Collisions
                var AABBIntersect = function(ax, ay, aw, ah, bx, by, bw, bh){
                    return ax < bx+bw && ay < by+bh && bx < ax+aw && by < ay+ah;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, this.x, this.y, this.width, this.height)){
                    fadein_block.transition = true;
                    level++;
                    level15();
                    this.vannish();
                };

                // Item Collisions
                if(AABBIntersect(player.x, player.y, player.width, player.height, healthBox.x, healthBox.y, healthBox.side, healthBox.side)){
                    if(health === maxhealth){
                        health += 0;
                    } else if(health < maxhealth && health > (maxhealth / 2)){
                        health = maxhealth;
                    } else if(health <= (maxhealth / 2)){
                        health += Math.floor((maxhealth / 2));
                    } else {
                        health += 0;
                    };
                    
                    ching.play();

                    healthBox.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox.x, expBox.y, expBox.side, expBox.side)){
                    exp += 25;
                    ching.play();

                    expBox.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox2.x, expBox2.y, expBox2.side, expBox2.side)){
                    exp += 25;
                    ching.play();

                    expBox2.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox3.x, expBox3.y, expBox3.side, expBox3.side)){
                    exp += 25;
                    ching.play();

                    expBox3.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, speedBoost.x, speedBoost.y, speedBoost.side, speedBoost.side)){
                    speed += 0.25;
                    ching.play();

                    speedBoost.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, attackBoost.x, attackBoost.y, attackBoost.side, attackBoost.side)){
                    attack += 4;
                    ching.play();

                    attackBoost.vannish();
                };


                // Ai Collisions                

                if(AABBIntersect(player.x, player.y, player.width, player.height, ball.x, ball.y, ball.side, ball.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, cannon.x, cannon.y, cannon.side, cannon.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai5.x, ai5.y, ai5.side, ai5.side)){
                    helicopter.play();
                    health -= 2;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ninja1.x, ninja1.y, ninja1.side, ninja1.side)){
                    helicopter.play();
                    health -= 2;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ninja2.x, ninja2.y, ninja2.side, ninja2.side)){
                    helicopter.play();
                    health -= 2;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai.x, ai.y, ai.side, ai.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, aorith.x, aorith.y, aorith.side, aorith.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, aorith2.x, aorith2.y, aorith2.side, aorith2.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, aorith3.x, aorith3.y, aorith3.side, aorith3.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, aorith4.x, aorith4.y, aorith4.side, aorith4.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, ai9.x, ai9.y, ai9.side, ai9.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, ai10.x, ai10.y, ai10.side, ai10.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, soldier.x, soldier.y, soldier.side, soldier.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai7.x, ai7.y, ai7.side, ai7.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai8.x, ai8.y, ai8.side, ai8.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai2.x, ai2.y, ai2.side, ai2.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai3.x, ai3.y, ai3.side, ai3.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai4.x, ai4.y, ai4.side, ai4.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, ai6.x, ai6.y, ai6.side, ai6.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, jin.x, jin.y, jin.side, jin.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, boulder.x, boulder.y, boulder.side, boulder.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, boulder2.x, boulder2.y, boulder2.side, boulder2.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), cannon.x, cannon.y, cannon.side, cannon.side)){
                    cannon.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ball.x, ball.y, ball.side, ball.side)){
                    ball.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai5.x, ai5.y, ai5.side, ai5.side)){
                    ai5.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ninja1.x, ninja1.y, ninja1.side, ninja1.side)){
                    ninja1.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), soldier.x, soldier.y, soldier.side, soldier.side)){
                    soldier.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ninja2.x, ninja2.y, ninja2.side, ninja2.side)){
                    ninja2.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai2.x, ai2.y, ai2.side, ai2.side)){
                    ai2.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai.x, ai.y, ai.side, ai.side)){
                    ai.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), aorith.x, aorith.y, aorith.side, aorith.side)){
                    aorith.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), aorith2.x, aorith2.y, aorith2.side, aorith2.side)){
                    aorith2.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), aorith3.x, aorith3.y, aorith3.side, aorith3.side)){
                    aorith3.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), aorith4.x, aorith4.y, aorith4.side, aorith4.side)){
                    aorith4.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai9.x, ai9.y, ai9.side, ai9.side)){
                    ai9.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai10.x, ai10.y, ai10.side, ai10.side)){
                    ai10.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai3.x, ai3.y, ai3.side, ai3.side)){
                    ai3.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai4.x, ai4.y, ai4.side, ai4.side)){
                    ai4.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai6.x, ai6.y, ai6.side, ai6.side)){
                    ai6.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), jin.x, jin.y, jin.side, jin.side)){
                    jin.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai8.x, ai8.y, ai8.side, ai8.side)){
                    ai8.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai7.x, ai7.y, ai7.side, ai7.side)){
                    ai7.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), boulder.x, boulder.y, boulder.side, boulder.side)){
                    boulder.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), boulder2.x, boulder2.y, boulder2.side, boulder2.side)){
                    boulder2.hp -= spell.damage;
                    lazer_sound.play();
                };

            },

            draw: function(){
                ctx.fillStyle = 'black';
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        };
        
        var level15_block = {
            x: null,
            y: null,
            width: 130,
            height: 50,

            vannish: function(){
                this.x = 1000;
                this.y = 1000;
            },

            update: function(){ 
                //Check Collisions
                var AABBIntersect = function(ax, ay, aw, ah, bx, by, bw, bh){
                    return ax < bx+bw && ay < by+bh && bx < ax+aw && by < ay+ah;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, this.x, this.y, this.width, this.height)){
                    fadein_block.transition = true;
                    level++;
                    level16();
                    this.vannish();
                };

                // Item Collisions
                if(AABBIntersect(player.x, player.y, player.width, player.height, healthBox.x, healthBox.y, healthBox.side, healthBox.side)){
                    if(health === maxhealth){
                        health += 0;
                    } else if(health < maxhealth && health > (maxhealth / 2)){
                        health = maxhealth;
                    } else if(health <= (maxhealth / 2)){
                        health += Math.floor((maxhealth / 2));
                    } else {
                        health += 0;
                    };
                    
                    ching.play();

                    healthBox.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox.x, expBox.y, expBox.side, expBox.side)){
                    exp += 25;
                    ching.play();

                    expBox.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox2.x, expBox2.y, expBox2.side, expBox2.side)){
                    exp += 25;
                    ching.play();

                    expBox2.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox3.x, expBox3.y, expBox3.side, expBox3.side)){
                    exp += 25;
                    ching.play();

                    expBox3.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, speedBoost.x, speedBoost.y, speedBoost.side, speedBoost.side)){
                    speed += 0.25;
                    ching.play();

                    speedBoost.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, attackBoost.x, attackBoost.y, attackBoost.side, attackBoost.side)){
                    attack += 4;
                    ching.play();

                    attackBoost.vannish();
                };


                // Ai Collisions                

                if(AABBIntersect(player.x, player.y, player.width, player.height, ball.x, ball.y, ball.side, ball.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, cannon.x, cannon.y, cannon.side, cannon.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai5.x, ai5.y, ai5.side, ai5.side)){
                    helicopter.play();
                    health -= 2;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ninja1.x, ninja1.y, ninja1.side, ninja1.side)){
                    helicopter.play();
                    health -= 2;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ninja2.x, ninja2.y, ninja2.side, ninja2.side)){
                    helicopter.play();
                    health -= 2;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai.x, ai.y, ai.side, ai.side)){
                    health--;
                    helicopter.play();
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, turret.x, turret.y, turret.side, turret.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, lazer.x, lazer.y, lazer.width, lazer.height)){
                    health--;
                    helicopter.play();
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, turret2.x, turret2.y, turret2.side, turret2.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, lazer2.x, lazer2.y, lazer2.width, lazer2.height)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, turret3.x, turret3.y, turret3.side, turret3.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, lazer3.x, lazer3.y, lazer3.width, lazer3.height)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, aorith.x, aorith.y, aorith.side, aorith.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, aorith2.x, aorith2.y, aorith2.side, aorith2.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, aorith3.x, aorith3.y, aorith3.side, aorith3.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, aorith4.x, aorith4.y, aorith4.side, aorith4.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, ai9.x, ai9.y, ai9.side, ai9.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, ai10.x, ai10.y, ai10.side, ai10.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, soldier.x, soldier.y, soldier.side, soldier.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai7.x, ai7.y, ai7.side, ai7.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai8.x, ai8.y, ai8.side, ai8.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai2.x, ai2.y, ai2.side, ai2.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai3.x, ai3.y, ai3.side, ai3.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai4.x, ai4.y, ai4.side, ai4.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, ai6.x, ai6.y, ai6.side, ai6.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, jin.x, jin.y, jin.side, jin.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, boulder.x, boulder.y, boulder.side, boulder.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, boulder2.x, boulder2.y, boulder2.side, boulder2.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), cannon.x, cannon.y, cannon.side, cannon.side)){
                    cannon.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ball.x, ball.y, ball.side, ball.side)){
                    ball.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai5.x, ai5.y, ai5.side, ai5.side)){
                    ai5.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ninja1.x, ninja1.y, ninja1.side, ninja1.side)){
                    ninja1.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), soldier.x, soldier.y, soldier.side, soldier.side)){
                    soldier.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ninja2.x, ninja2.y, ninja2.side, ninja2.side)){
                    ninja2.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai2.x, ai2.y, ai2.side, ai2.side)){
                    ai2.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai.x, ai.y, ai.side, ai.side)){
                    ai.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), aorith.x, aorith.y, aorith.side, aorith.side)){
                    aorith.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), aorith2.x, aorith2.y, aorith2.side, aorith2.side)){
                    aorith2.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), aorith3.x, aorith3.y, aorith3.side, aorith3.side)){
                    aorith3.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), aorith4.x, aorith4.y, aorith4.side, aorith4.side)){
                    aorith4.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai9.x, ai9.y, ai9.side, ai9.side)){
                    ai9.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai10.x, ai10.y, ai10.side, ai10.side)){
                    ai10.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai3.x, ai3.y, ai3.side, ai3.side)){
                    ai3.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai4.x, ai4.y, ai4.side, ai4.side)){
                    ai4.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai6.x, ai6.y, ai6.side, ai6.side)){
                    ai6.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), jin.x, jin.y, jin.side, jin.side)){
                    jin.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai8.x, ai8.y, ai8.side, ai8.side)){
                    ai8.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai7.x, ai7.y, ai7.side, ai7.side)){
                    ai7.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), boulder.x, boulder.y, boulder.side, boulder.side)){
                    boulder.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), boulder2.x, boulder2.y, boulder2.side, boulder2.side)){
                    boulder2.hp -= spell.damage;
                    lazer_sound.play();
                };

            },

            draw: function(){
                ctx.fillStyle = 'black';
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        };
        
        var level16_block = {
            x: null,
            y: null,
            width: 130,
            height: 50,

            vannish: function(){
                this.x = 1000;
                this.y = 1000;
            },

            update: function(){ 
                //Check Collisions
                var AABBIntersect = function(ax, ay, aw, ah, bx, by, bw, bh){
                    return ax < bx+bw && ay < by+bh && bx < ax+aw && by < ay+ah;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, this.x, this.y, this.width, this.height)){
                    fadein_block.transition = true;
                    level++;
                    level17();
                    this.vannish();
                };

                // Item Collisions
                if(AABBIntersect(player.x, player.y, player.width, player.height, healthBox.x, healthBox.y, healthBox.side, healthBox.side)){
                    if(health === maxhealth){
                        health += 0;
                    } else if(health < maxhealth && health > (maxhealth / 2)){
                        health = maxhealth;
                    } else if(health <= (maxhealth / 2)){
                        health += Math.floor((maxhealth / 2));
                    } else {
                        health += 0;
                    };
                    
                    ching.play();

                    healthBox.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox.x, expBox.y, expBox.side, expBox.side)){
                    exp += 25;
                    ching.play();

                    expBox.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox2.x, expBox2.y, expBox2.side, expBox2.side)){
                    exp += 25;
                    ching.play();

                    expBox2.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox3.x, expBox3.y, expBox3.side, expBox3.side)){
                    exp += 25;
                    ching.play();

                    expBox3.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, speedBoost.x, speedBoost.y, speedBoost.side, speedBoost.side)){
                    speed += 0.25;
                    ching.play();

                    speedBoost.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, attackBoost.x, attackBoost.y, attackBoost.side, attackBoost.side)){
                    attack += 4;
                    ching.play();

                    attackBoost.vannish();
                };


                // Ai Collisions                

                if(AABBIntersect(player.x, player.y, player.width, player.height, ball.x, ball.y, ball.side, ball.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, cannon.x, cannon.y, cannon.side, cannon.side)){
                    helicopter.play();
                    health -= 1;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, ball2.x, ball2.y, ball2.side, ball2.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, cannon2.x, cannon2.y, cannon2.side, cannon2.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai5.x, ai5.y, ai5.side, ai5.side)){
                    helicopter.play();
                    health -= 2;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ninja1.x, ninja1.y, ninja1.side, ninja1.side)){
                    helicopter.play();
                    health -= 2;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ninja2.x, ninja2.y, ninja2.side, ninja2.side)){
                    helicopter.play();
                    health -= 2;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai.x, ai.y, ai.side, ai.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, turret.x, turret.y, turret.side, turret.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, lazer.x, lazer.y, lazer.width, lazer.height)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, turret2.x, turret2.y, turret2.side, turret2.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, lazer2.x, lazer2.y, lazer2.width, lazer2.height)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, turret3.x, turret3.y, turret3.side, turret3.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, lazer3.x, lazer3.y, lazer3.width, lazer3.height)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, turret4.x, turret4.y, turret4.side, turret4.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, lazer4.x, lazer4.y, lazer4.width, lazer4.height)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, aorith.x, aorith.y, aorith.side, aorith.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, aorith2.x, aorith2.y, aorith2.side, aorith2.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, aorith3.x, aorith3.y, aorith3.side, aorith3.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, aorith4.x, aorith4.y, aorith4.side, aorith4.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, ai9.x, ai9.y, ai9.side, ai9.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, ai10.x, ai10.y, ai10.side, ai10.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, soldier.x, soldier.y, soldier.side, soldier.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai7.x, ai7.y, ai7.side, ai7.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai8.x, ai8.y, ai8.side, ai8.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai2.x, ai2.y, ai2.side, ai2.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai3.x, ai3.y, ai3.side, ai3.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai4.x, ai4.y, ai4.side, ai4.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, ai6.x, ai6.y, ai6.side, ai6.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, jin.x, jin.y, jin.side, jin.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, boulder.x, boulder.y, boulder.side, boulder.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, boulder2.x, boulder2.y, boulder2.side, boulder2.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), cannon.x, cannon.y, cannon.side, cannon.side)){
                    cannon.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ball.x, ball.y, ball.side, ball.side)){
                    ball.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), cannon2.x, cannon2.y, cannon2.side, cannon2.side)){
                    cannon2.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ball2.x, ball2.y, ball2.side, ball2.side)){
                    ball2.hp -= spell.damage
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai5.x, ai5.y, ai5.side, ai5.side)){
                    ai5.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ninja1.x, ninja1.y, ninja1.side, ninja1.side)){
                    ninja1.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), soldier.x, soldier.y, soldier.side, soldier.side)){
                    soldier.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ninja2.x, ninja2.y, ninja2.side, ninja2.side)){
                    ninja2.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai2.x, ai2.y, ai2.side, ai2.side)){
                    ai2.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai.x, ai.y, ai.side, ai.side)){
                    ai.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), aorith.x, aorith.y, aorith.side, aorith.side)){
                    aorith.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), aorith2.x, aorith2.y, aorith2.side, aorith2.side)){
                    aorith2.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), aorith3.x, aorith3.y, aorith3.side, aorith3.side)){
                    aorith3.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), aorith4.x, aorith4.y, aorith4.side, aorith4.side)){
                    aorith4.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai9.x, ai9.y, ai9.side, ai9.side)){
                    ai9.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai10.x, ai10.y, ai10.side, ai10.side)){
                    ai10.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai3.x, ai3.y, ai3.side, ai3.side)){
                    ai3.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai4.x, ai4.y, ai4.side, ai4.side)){
                    ai4.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai6.x, ai6.y, ai6.side, ai6.side)){
                    ai6.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), jin.x, jin.y, jin.side, jin.side)){
                    jin.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai8.x, ai8.y, ai8.side, ai8.side)){
                    ai8.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai7.x, ai7.y, ai7.side, ai7.side)){
                    ai7.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), boulder.x, boulder.y, boulder.side, boulder.side)){
                    boulder.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), boulder2.x, boulder2.y, boulder2.side, boulder2.side)){
                    boulder2.hp -= spell.damage;
                    lazer_sound.play();
                };

            },

            draw: function(){
                ctx.fillStyle = 'black';
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        };
        
        var level17_block = {
            x: null,
            y: null,
            width: 130,
            height: 50,

            vannish: function(){
                this.x = 1000;
                this.y = 1000;
            },

            update: function(){ 
                //Check Collisions
                var AABBIntersect = function(ax, ay, aw, ah, bx, by, bw, bh){
                    return ax < bx+bw && ay < by+bh && bx < ax+aw && by < ay+ah;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, this.x, this.y, this.width, this.height)){
                    fadein_block.transition = true;
                    level++;
                    level18();
                    this.vannish();
                };

                // Item Collisions
                if(AABBIntersect(player.x, player.y, player.width, player.height, healthBox.x, healthBox.y, healthBox.side, healthBox.side)){
                    if(health === maxhealth){
                        health += 0;
                    } else if(health < maxhealth && health > (maxhealth / 2)){
                        health = maxhealth;
                    } else if(health <= (maxhealth / 2)){
                        health += Math.floor((maxhealth / 2));
                    } else {
                        health += 0;
                    };
                    
                    ching.play();

                    healthBox.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox.x, expBox.y, expBox.side, expBox.side)){
                    exp += 25;
                    ching.play();

                    expBox.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox2.x, expBox2.y, expBox2.side, expBox2.side)){
                    exp += 25;
                    ching.play();

                    expBox2.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox3.x, expBox3.y, expBox3.side, expBox3.side)){
                    exp += 25;
                    ching.play();

                    expBox3.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, speedBoost.x, speedBoost.y, speedBoost.side, speedBoost.side)){
                    speed += 0.25;
                    ching.play();

                    speedBoost.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, attackBoost.x, attackBoost.y, attackBoost.side, attackBoost.side)){
                    attack += 4;
                    ching.play();

                    attackBoost.vannish();
                };


                // Ai Collisions                

                if(AABBIntersect(player.x, player.y, player.width, player.height, ball.x, ball.y, ball.side, ball.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, cannon.x, cannon.y, cannon.side, cannon.side)){
                    helicopter.play();
                    health -= 1;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, ball2.x, ball2.y, ball2.side, ball2.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, cannon2.x, cannon2.y, cannon2.side, cannon2.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai5.x, ai5.y, ai5.side, ai5.side)){
                    helicopter.play();
                    health -= 2;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ninja1.x, ninja1.y, ninja1.side, ninja1.side)){
                    helicopter.play();
                    health -= 2;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ninja2.x, ninja2.y, ninja2.side, ninja2.side)){
                    helicopter.play();
                    health -= 2;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai.x, ai.y, ai.side, ai.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, turret.x, turret.y, turret.side, turret.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, lazer.x, lazer.y, lazer.width, lazer.height)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, turret2.x, turret2.y, turret2.side, turret2.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, lazer2.x, lazer2.y, lazer2.width, lazer2.height)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, turret3.x, turret3.y, turret3.side, turret3.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, lazer3.x, lazer3.y, lazer3.width, lazer3.height)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, turret4.x, turret4.y, turret4.side, turret4.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, lazer4.x, lazer4.y, lazer4.width, lazer4.height)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, aorith.x, aorith.y, aorith.side, aorith.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, aorith2.x, aorith2.y, aorith2.side, aorith2.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, aorith3.x, aorith3.y, aorith3.side, aorith3.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, aorith4.x, aorith4.y, aorith4.side, aorith4.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, ai9.x, ai9.y, ai9.side, ai9.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, ai10.x, ai10.y, ai10.side, ai10.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, soldier.x, soldier.y, soldier.side, soldier.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai7.x, ai7.y, ai7.side, ai7.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai8.x, ai8.y, ai8.side, ai8.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai2.x, ai2.y, ai2.side, ai2.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai3.x, ai3.y, ai3.side, ai3.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai4.x, ai4.y, ai4.side, ai4.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, ai6.x, ai6.y, ai6.side, ai6.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, jin.x, jin.y, jin.side, jin.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, boulder.x, boulder.y, boulder.side, boulder.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, boulder2.x, boulder2.y, boulder2.side, boulder2.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), cannon.x, cannon.y, cannon.side, cannon.side)){
                    cannon.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ball.x, ball.y, ball.side, ball.side)){
                    ball.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), cannon2.x, cannon2.y, cannon2.side, cannon2.side)){
                    cannon2.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ball2.x, ball2.y, ball2.side, ball2.side)){
                    ball2.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai5.x, ai5.y, ai5.side, ai5.side)){
                    ai5.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ninja1.x, ninja1.y, ninja1.side, ninja1.side)){
                    ninja1.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), soldier.x, soldier.y, soldier.side, soldier.side)){
                    soldier.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ninja2.x, ninja2.y, ninja2.side, ninja2.side)){
                    ninja2.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai2.x, ai2.y, ai2.side, ai2.side)){
                    ai2.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai.x, ai.y, ai.side, ai.side)){
                    ai.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), aorith.x, aorith.y, aorith.side, aorith.side)){
                    aorith.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), aorith2.x, aorith2.y, aorith2.side, aorith2.side)){
                    aorith2.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), aorith3.x, aorith3.y, aorith3.side, aorith3.side)){
                    aorith3.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), aorith4.x, aorith4.y, aorith4.side, aorith4.side)){
                    aorith4.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai9.x, ai9.y, ai9.side, ai9.side)){
                    ai9.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai10.x, ai10.y, ai10.side, ai10.side)){
                    ai10.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai3.x, ai3.y, ai3.side, ai3.side)){
                    ai3.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai4.x, ai4.y, ai4.side, ai4.side)){
                    ai4.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai6.x, ai6.y, ai6.side, ai6.side)){
                    ai6.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), jin.x, jin.y, jin.side, jin.side)){
                    jin.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai8.x, ai8.y, ai8.side, ai8.side)){
                    ai8.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai7.x, ai7.y, ai7.side, ai7.side)){
                    ai7.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), boulder.x, boulder.y, boulder.side, boulder.side)){
                    boulder.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), boulder2.x, boulder2.y, boulder2.side, boulder2.side)){
                    boulder2.hp -= spell.damage;
                    lazer_sound.play();
                };

            },

            draw: function(){
                ctx.fillStyle = 'black';
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        };
        
        var level18_block = {
            x: null,
            y: null,
            width: 130,
            height: 50,

            vannish: function(){
                this.x = 1000;
                this.y = 1000;
            },

            update: function(){ 
                //Check Collisions
                var AABBIntersect = function(ax, ay, aw, ah, bx, by, bw, bh){
                    return ax < bx+bw && ay < by+bh && bx < ax+aw && by < ay+ah;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, this.x, this.y, this.width, this.height)){
                    fadein_block.transition = true;
                    level++;
                    epilogue();
                    this.vannish();
                };

                // Item Collisions
                if(AABBIntersect(player.x, player.y, player.width, player.height, healthBox.x, healthBox.y, healthBox.side, healthBox.side)){
                    if(health === maxhealth){
                        health += 0;
                    } else if(health < maxhealth && health > (maxhealth / 2)){
                        health = maxhealth;
                    } else if(health <= (maxhealth / 2)){
                        health += Math.floor((maxhealth / 2));
                    } else {
                        health += 0;
                    };
                    
                    ching.play();

                    healthBox.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox.x, expBox.y, expBox.side, expBox.side)){
                    exp += 25;
                    ching.play();

                    expBox.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox2.x, expBox2.y, expBox2.side, expBox2.side)){
                    exp += 25;
                    ching.play();

                    expBox2.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, expBox3.x, expBox3.y, expBox3.side, expBox3.side)){
                    exp += 25;
                    ching.play();

                    expBox3.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, speedBoost.x, speedBoost.y, speedBoost.side, speedBoost.side)){
                    speed += 0.25;
                    ching.play();

                    speedBoost.vannish();
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, attackBoost.x, attackBoost.y, attackBoost.side, attackBoost.side)){
                    attack += 4;
                    ching.play();

                    attackBoost.vannish();
                };


                // Ai Collisions                

                if(AABBIntersect(player.x, player.y, player.width, player.height, ball.x, ball.y, ball.side, ball.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, cannon.x, cannon.y, cannon.side, cannon.side)){
                    helicopter.play();
                    health -= 1;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, ball2.x, ball2.y, ball2.side, ball2.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, cannon2.x, cannon2.y, cannon2.side, cannon2.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai5.x, ai5.y, ai5.side, ai5.side)){
                    helicopter.play();
                    health -= 2;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ninja1.x, ninja1.y, ninja1.side, ninja1.side)){
                    helicopter.play();
                    health -= 2;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ninja2.x, ninja2.y, ninja2.side, ninja2.side)){
                    helicopter.play();
                    health -= 2;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai.x, ai.y, ai.side, ai.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, qi.x, qi.y, qi.side, qi.side)){
                    helicopter.play();
                    health -= 2;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, turret.x, turret.y, turret.side, turret.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, lazer.x, lazer.y, lazer.width, lazer.height)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, turret2.x, turret2.y, turret2.side, turret2.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, lazer2.x, lazer2.y, lazer2.width, lazer2.height)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, turret3.x, turret3.y, turret3.side, turret3.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, lazer3.x, lazer3.y, lazer3.width, lazer3.height)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, turret4.x, turret4.y, turret4.side, turret4.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, lazer4.x, lazer4.y, lazer4.width, lazer4.height)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, aorith.x, aorith.y, aorith.side, aorith.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, aorith2.x, aorith2.y, aorith2.side, aorith2.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, aorith3.x, aorith3.y, aorith3.side, aorith3.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, aorith4.x, aorith4.y, aorith4.side, aorith4.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, ai9.x, ai9.y, ai9.side, ai9.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, ai10.x, ai10.y, ai10.side, ai10.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, soldier.x, soldier.y, soldier.side, soldier.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai7.x, ai7.y, ai7.side, ai7.side)){
                    helicopter.play();
                    health -= 1;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai8.x, ai8.y, ai8.side, ai8.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai2.x, ai2.y, ai2.side, ai2.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai3.x, ai3.y, ai3.side, ai3.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(player.x, player.y, player.width, player.height, ai4.x, ai4.y, ai4.side, ai4.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, ai6.x, ai6.y, ai6.side, ai6.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, jin.x, jin.y, jin.side, jin.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, rock.x, rock.y, rock.side, rock.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, rock2.x, rock2.y, rock2.side, rock2.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, rock3.x, rock3.y, rock3.side, rock3.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, rock4.x, rock4.y, rock4.side, rock4.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, boulder.x, boulder.y, boulder.side, boulder.side)){
                    helicopter.play();
                    health--;
                };
                
                if(AABBIntersect(player.x, player.y, player.width, player.height, boulder2.x, boulder2.y, boulder2.side, boulder2.side)){
                    helicopter.play();
                    health--;
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), cannon.x, cannon.y, cannon.side, cannon.side)){
                    cannon.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ball.x, ball.y, ball.side, ball.side)){
                    ball.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), cannon2.x, cannon2.y, cannon2.side, cannon2.side)){
                    cannon2.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ball2.x, ball2.y, ball2.side, ball2.side)){
                    ball2.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai5.x, ai5.y, ai5.side, ai5.side)){
                    ai5.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ninja1.x, ninja1.y, ninja1.side, ninja1.side)){
                    ninja1.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), soldier.x, soldier.y, soldier.side, soldier.side)){
                    soldier.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ninja2.x, ninja2.y, ninja2.side, ninja2.side)){
                    ninja2.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai2.x, ai2.y, ai2.side, ai2.side)){
                    ai2.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai.x, ai.y, ai.side, ai.side)){
                    ai.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), qi.x, qi.y, qi.side, qi.side)){
                    qi.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), aorith.x, aorith.y, aorith.side, aorith.side)){
                    aorith.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), aorith2.x, aorith2.y, aorith2.side, aorith2.side)){
                    aorith2.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), aorith3.x, aorith3.y, aorith3.side, aorith3.side)){
                    aorith3.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), aorith4.x, aorith4.y, aorith4.side, aorith4.side)){
                    aorith4.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai9.x, ai9.y, ai9.side, ai9.side)){
                    ai9.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai10.x, ai10.y, ai10.side, ai10.side)){
                    ai10.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai3.x, ai3.y, ai3.side, ai3.side)){
                    ai3.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai4.x, ai4.y, ai4.side, ai4.side)){
                    ai4.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai6.x, ai6.y, ai6.side, ai6.side)){
                    ai6.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), jin.x, jin.y, jin.side, jin.side)){
                    jin.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai8.x, ai8.y, ai8.side, ai8.side)){
                    ai8.hp -= spell.damage;
                    lazer_sound.play();
                };

                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), ai7.x, ai7.y, ai7.side, ai7.side)){
                    ai7.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), rock.x, rock.y, rock.side, rock.side)){
                    rock.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), rock2.x, rock2.y, rock2.side, rock2.side)){
                    rock2.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), rock3.x, rock3.y, rock3.side, rock.side)){
                    rock3.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), rock4.x, rock4.y, rock4.side, rock4.side)){
                    rock4.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), boulder.x, boulder.y, boulder.side, boulder.side)){
                    boulder.hp -= spell.damage;
                    lazer_sound.play();
                };
                
                if(AABBIntersect(spell.x, spell.y, (spell.width), (spell.height), boulder2.x, boulder2.y, boulder2.side, boulder2.side)){
                    boulder2.hp -= spell.damage;
                    lazer_sound.play();
                };

            },

            draw: function(){
                ctx.fillStyle = 'black';
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        };

        var level2 = function(){
            player.x = 0;
            player.y = HEIGHT - player.height;

            if(level === 2){
                ai.x = 0;
                ai.y = (HEIGHT/2) - 100;

                ai2.x = WIDTH-ai2.side;
                ai2.y = (HEIGHT/2) + 100;

                ai3.x = WIDTH/2;
                ai3.y = 0;

                ai7.x = (WIDTH/2);
                ai7.y = (HEIGHT/2);

                ai.vel = {
                    x: ai.speed,
                    y: null
                }

                ai2.vel = {
                    x: ai2.speed,
                    y: null
                }

                ai7.vel = {
                    x: ai7.speed,
                    y: null
                }

                ai3.vel = {
                    x: null,
                    y: ai3.speed
                }

                spell.damage = attack;
                ai.hp = 99;
                ai2.hp = 99;
                ai3.hp = 149;
                ai7.hp = 99;
                player.speed = speed;
            };
        };

        var level3 = function(){
            player.x = 0;
            player.y = HEIGHT - player.height;

            if(level === 3){
                //Delete Items
                healthBox.vannish();

                //Make Positions for AI
                ai.x = 0;
                ai.y = (HEIGHT/2) - 100;

                ai2.x = 0;
                ai2.y = (HEIGHT/2) + 80;

                ai3.x = WIDTH-ai3.side;
                ai3.y = HEIGHT-ai3.side;

                ai4.x = WIDTH-(ai3.side*2);
                ai4.y = 0;

                ai8.x = (WIDTH/2)-100;
                ai8.y = HEIGHT/2;

                ai5.x = WIDTH - (ai5.side*2);
                ai5.y = HEIGHT-ai5.side-25;

                ai.vel = {
                    x: ai.speed,
                    y: null
                }

                ai2.vel = {
                    x: ai2.speed,
                    y: null
                }

                ai3.vel = {
                    x: null,
                    y: ai3.speed
                }

                ai4.vel = {
                    x: null,
                    y: ai4.speed
                }

                ai5.vel = {
                    x: null,
                    y: ai5.speed
                }

                ai8.vel = {
                    x: null,
                    y: ai8.speed
                }

                spell.damage = attack;
                ai.hp = 99;
                ai2.hp = 99;
                ai3.hp = 149;
                ai4.hp = 149;
                ai8.hp = 179;
                ai5.hp = 599;
                player.speed = speed;
            };
        };

        var level4 = function(){
            player.x = WIDTH/2 - player.width;
            player.y = HEIGHT - player.height;

            if(level === 4){
                //Delete Items
                attackBoost.vannish();

                //Make Positions for AI
                ai.x = 0;
                ai.y = (HEIGHT/2) - 115;

                ai2.x = WIDTH - ai2.side;
                ai2.y = (HEIGHT/2) - 115;

                ai3.x = (WIDTH/2) + 115;
                ai3.y = 0;

                ai4.x = (WIDTH/2) - 115;
                ai4.y = HEIGHT-ai4.side;

                ai5.x = (WIDTH/2) - (ai5.side/2);
                ai5.y = (HEIGHT/2) - (ai5.side/2);

                ai6.x = WIDTH-(ai6.side*2);
                ai6.y = HEIGHT-ai6.side;

                ai7.x = 0;
                ai7.y = (HEIGHT/2) + 115;

                ai.vel = {
                    x: ai.speed,
                    y: null
                }

                ai2.vel = {
                    x: ai2.speed,
                    y: null
                }

                ai3.vel = {
                    x: null,
                    y: ai3.speed
                }

                ai4.vel = {
                    x: null,
                    y: ai4.speed
                }

                ai5.vel = {
                    x: null,
                    y: ai5.speed
                }

                ai6.vel = {
                    x: ai6.speed,
                    y: ai6.speed
                }

                ai7.vel = {
                    x: ai7.speed,
                    y: null
                }

                spell.damage = attack;
                ai.hp = 99;
                ai2.hp = 99;
                ai3.hp = 149;
                ai4.hp = 149;
                ai5.hp = 599;
                ai6.hp = 449;
                ai7.hp = 99;
                player.speed = speed;
            };
        };

        var level5 = function(){
            player.x = WIDTH - player.width;
            player.y = HEIGHT - player.height;

            if(level === 5){
                //Delete Items
                speedBoost.vannish();
                expBox.vannish();

                //Make Positions for AI
                ai.vannish();
                ai2.vannish();
                ai3.vannish();
                ai4.vannish();
                ai5.vannish();
                ai6.vannish();
                ai7.vannish();

                boss_jr.x = 0;
                boss_jr.y = 115;

                block_1.x = -1000;
                block_1.y = -1000;

                block_2.x = -1000;
                block_2.y = -1000;

                block_3.x = -1000;
                block_3.y = -1000;

                block_4.x = -1000;
                block_4.y = -1000;

                block_5.x = -1000;
                block_5.y = -1000;

                block_1.vel = {
                    x: null,
                    y: block_1.speed
                };

                block_2.vel = {
                    x: null,
                    y: block_2.speed
                };

                block_3.vel = {
                    x: null,
                    y: block_3.speed
                };

                block_4.vel = {
                    x: null,
                    y: block_4.speed
                };

                block_5.vel = {
                    x: null,
                    y: block_5.speed
                };

                boss_jr.vel = {
                    x: boss_jr.speed,
                    y: null
                };

                spell.damage = attack;
                boss_jr.hp  = 4999;
                block_1.hp = 99;
                block_2.hp = 99;
                block_3.hp = 99;
                block_4.hp = 99;
                block_5.hp = 99;

                ai.hp = 99;
                ai2.hp = 99;
                ai3.hp = 149;
                ai4.hp = 149;
                ai5.hp = 599;
                ai6.hp = 449;
                ai7.hp = 99;
                player.speed = speed;
            };
        };

        var level6 = function(){
            player.x = 0;
            player.y = HEIGHT - player.height;

            if(level === 6){
                //Delete Items
                speedBoost.vannish();
                attackBoost.vannish();
                healthBox.vannish();
                expBox.vannish();

                //Add Items
                attackBoost.x = 200;
                attackBoost.y = 200;

                expBox.x = 400;
                expBox.y = 150;

                ai.x = 0;
                ai.y = (HEIGHT/2) - 115;

                ai2.x = 0;
                ai2.y = (HEIGHT/2) - 45;

                ai7.x = 0;
                ai7.y = (HEIGHT/2) + 25;

                ai3.x = 150 - (ai4.side);
                ai3.y = 0;

                ai4.x = 300 - (ai4.side);
                ai4.y = 0;

                ai8.x = 450 - (ai8.side);
                ai8.y = 0;

                ai6.x = WIDTH-(ai6.side*2);
                ai6.y = HEIGHT-ai6.side;

                ai9.x = -100;
                ai9.y = -100;

                ai10.x = -100;
                ai10.y = -100;

                ai11.x = ai11.side*2;
                ai11.y = 45;

                ai.vel = {
                    x: ai.speed,
                    y: null
                }

                ai2.vel = {
                    x: ai2.speed,
                    y: null
                }

                ai3.vel = {
                    x: null,
                    y: ai3.speed
                }

                ai4.vel = {
                    x: null,
                    y: ai4.speed
                }

                ai5.vel = {
                    x: null,
                    y: ai5.speed
                }

                ai6.vel = {
                    x: ai6.speed,
                    y: ai6.speed
                };

                ai7.vel = {
                    x: ai7.speed,
                    y: null
                };

                ai8.vel = {
                    x: null,
                    y: ai4.speed
                };

                ai11.vel = {
                    x: ai6.speed,
                    y: ai6.speed
                };

                spell.damage = attack;
                ai.hp = 99;
                ai2.hp = 99;
                ai3.hp = 149;
                ai4.hp = 149;
                ai8.hp = 149;
                ai5.hp = 599;
                ai6.hp = 449;
                ai7.hp = 99;
                ai9.hp = 3000;
                ai10.hp = 3000;
                ai11.hp = 449;
                player.speed = speed;
            };
        };

        var level7 = function(){
            player.x = WIDTH-player.width;
            player.y = HEIGHT - player.height;

            if(level === 7){
                //Make Ai's Stronger
                ai6.speed += 1;
                guard.speed += 1;


                //Delete Items / Ai's
                speedBoost.vannish();
                attackBoost.vannish();
                healthBox.vannish();
                expBox.vannish();

                ai9.alive = false;
                ai10.alive = false;

                ai.vannish();
                ai2.vannish();
                ai3.vannish();
                ai4.vannish();
                ai5.vannish();
                ai7.vannish();
                ai8.vannish();
                ai9.vannish();
                ai10.vannish();
                ai11.vannish();

                //Add Items
                healthBox.x = 223;
                healthBox.y = 62;

                //Ai Positioning

                ai6.x = WIDTH-(ai6.side*2);
                ai6.y = 100;

                guard.x = 22;
                guard.y = HEIGHT-(guard.side+10);

                cannon.x = 0;
                cannon.y = 112;

                ball.x = -100;
                ball.y = -100;

                //Set Ai Speed

                cannon.vel = {
                    x: cannon.speed,
                    y: null
                };

                ball.vel = {
                    x: null,
                    y: ball.speed
                };

                ai.vel = {
                    x: ai.speed,
                    y: null
                }

                ai2.vel = {
                    x: ai2.speed,
                    y: null
                }

                ai3.vel = {
                    x: null,
                    y: ai3.speed
                }

                ai4.vel = {
                    x: null,
                    y: ai4.speed
                }

                ai5.vel = {
                    x: null,
                    y: ai5.speed
                }

                ai6.vel = {
                    x: ai6.speed,
                    y: ai6.speed
                };

                ai7.vel = {
                    x: ai7.speed,
                    y: null
                };

                ai8.vel = {
                    x: null,
                    y: ai4.speed
                };

                ai11.vel = {
                    x: ai6.speed,
                    y: ai6.speed
                };

                guard.vel = {
                    x: guard.speed,
                    y: guard.speed
                };

                spell.damage = attack;
                ai6.hp = 2000;
                guard.hp = 2000;
                player.speed = speed;
                cannon.hp = 10000;
                ball.hp = 850;

            };
        };

        var level8 = function(){
            player.x = WIDTH-player.width;
            player.y = HEIGHT - player.height;

            if(level === 8){
                //Make Ai's Stronger
                ball.speed += 1;

                ai2.speed += 1.5;
                ai.speed += 1.5;
                ai3.speed += 1.5;
                ai4.speed += 1.5;
                ai8.speed += 2.5;

                //Delete Items / Ai's
                speedBoost.vannish();
                attackBoost.vannish();
                healthBox.vannish();
                expBox.vannish();

                ai.vannish();
                ai2.vannish();
                ai3.vannish();
                ai4.vannish();
                ai5.vannish();
                ai6.vannish();
                ai7.vannish();
                ai8.vannish();
                ai9.vannish();
                ai10.vannish();
                ai11.vannish();
                guard.vannish();

                //Add Items
                speedBoost.x = 500;
                speedBoost.y = 120;

                //Ai Positioning

                cannon.x = 1;
                cannon.y = 200;

                ball.x = -100;
                ball.y = -100;

                ninja1.x = ((WIDTH/2)-50);
                ninja1.y = 102;

                ninja2.x = ((WIDTH/2)-50)+49;
                ninja2.y = 102;

                ai5.x = ((WIDTH/2)-50)+99;
                ai5.y = 102;

                ai.x = 0;
                ai.y = 102;

                ai7.x = WIDTH/2;
                ai7.y = 150;

                soldier.x = 0;
                soldier.y = 300;

                ai2.x = WIDTH-ai2.side;
                ai2.y = 102;

                ai3.x = (WIDTH/2)-ai3.side-150;
                ai3.y = 0;

                ai4.x = (WIDTH/2)+150;
                ai4.y = 0;

                ai8.x = (WIDTH/2);
                ai8.y = 0;



                //Set Ai Speed

                cannon.vel = {
                    x: cannon.speed,
                    y: null
                };

                ball.vel = {
                    x: null,
                    y: ball.speed
                };

                ai.vel = {
                    x: ai.speed,
                    y: null
                }

                ai2.vel = {
                    x: ai2.speed,
                    y: null
                }

                ai3.vel = {
                    x: null,
                    y: ai3.speed
                }

                ai4.vel = {
                    x: null,
                    y: ai4.speed
                }

                ai5.vel = {
                    x: null,
                    y: ai5.speed
                };

                ai6.vel = {
                    x: ai6.speed,
                    y: ai6.speed
                };

                ai7.vel = {
                    x: ai7.speed,
                    y: null
                };

                soldier.vel = {
                    x: soldier.speed,
                    y: null
                };

                ai8.vel = {
                    x: null,
                    y: ai4.speed
                };

                ai11.vel = {
                    x: ai6.speed,
                    y: ai6.speed
                };

                guard.vel = {
                    x: guard.speed,
                    y: guard.speed
                };

                ninja1.vel = {
                    x: null,
                    y: ninja1.speed
                };

                ninja2.vel = {
                    x: null,
                    y: ninja2.speed
                };

                spell.damage = attack;
                player.speed = speed;
                cannon.hp = 15000;
                ball.hp = 850;
                ai5.hp = 10000;
                ninja1.hp = 10000;
                ninja2.hp = 10000;
                ai.hp = 400;
                ai2.hp = 400;
                ai3.hp = 1000;
                ai4.hp = 1000;
                ai8.hp = 2000;
                ai7.hp = 400;
                soldier.hp = 1000;

            };
        };

        var level9 = function(){
            player.x = (WIDTH/2);
            player.y = HEIGHT - player.height;

            if(level === 9){
                //Make Ai's Stronger
                

                //Delete Items / Ai's
                speedBoost.vannish();
                attackBoost.vannish();
                healthBox.vannish();
                expBox.vannish();

                ai.vannish();
                ai2.vannish();
                ai3.vannish();
                ai4.vannish();
                ai5.vannish();
                ai6.vannish();
                ai7.vannish();
                ai8.vannish();
                ai9.vannish();
                ai10.vannish();
                ai11.vannish();
                guard.vannish();
                cannon.vannish();
                soldier.vannish();
                guard.vannish();
                ninja1.vannish();
                ninja2.vannish();

                //Add Items
                expBox.x = 50;
                expBox.y = 150;

                //Ai Positioning
                ai6.x = WIDTH-(ai6.side*2);
                ai6.y = 100;

                guard.x = 22;
                guard.y = HEIGHT-(guard.side+10);

                jin.x = WIDTH-(jin.side*2)-15;
                jin.y = HEIGHT-(jin.side*2);

                //Set Ai Speed

                cannon.vel = {
                    x: cannon.speed,
                    y: null
                };

                ball.vel = {
                    x: null,
                    y: ball.speed
                };

                ai.vel = {
                    x: ai.speed,
                    y: null
                }

                ai2.vel = {
                    x: ai2.speed,
                    y: null
                }

                ai3.vel = {
                    x: null,
                    y: ai3.speed
                }

                ai4.vel = {
                    x: null,
                    y: ai4.speed
                }

                ai5.vel = {
                    x: null,
                    y: ai5.speed
                };

                ai6.vel = {
                    x: ai6.speed,
                    y: ai6.speed
                };

                jin.vel = {
                    x: jin.speed,
                    y: jin.speed
                };

                ai7.vel = {
                    x: ai7.speed,
                    y: null
                };

                soldier.vel = {
                    x: soldier.speed,
                    y: null
                };

                ai8.vel = {
                    x: null,
                    y: ai4.speed
                };

                ai11.vel = {
                    x: ai6.speed,
                    y: ai6.speed
                };

                guard.vel = {
                    x: guard.speed,
                    y: guard.speed
                };

                ninja1.vel = {
                    x: null,
                    y: ninja1.speed
                };

                ninja2.vel = {
                    x: null,
                    y: ninja2.speed
                };

                spell.damage = attack;
                player.speed = speed;

                //Ai Health
                ai6.hp = 700;
                guard.hp = 700;
                jin.hp = 700;

            };
        };

        var level10 = function(){
            player.x = 0;
            player.y = HEIGHT - player.height;

            if(level === 10){
                //Make Ai's Stronger
                

                //Delete Items / Ai's
                speedBoost.vannish();
                attackBoost.vannish();
                healthBox.vannish();
                expBox.vannish();
                expBox2.vannish();
                expBox3.vannish();

                ai.vannish();
                ai2.vannish();
                ai3.vannish();
                ai4.vannish();
                ai5.vannish();
                ai6.vannish();
                ai7.vannish();
                ai8.vannish();
                ai9.vannish();
                ai10.vannish();
                ai11.vannish();
                guard.vannish();
                cannon.vannish();
                soldier.vannish();
                guard.vannish();
                ninja1.vannish();
                ninja2.vannish();
                jin.vannish();

                //Add Items
                

                //Ai Positioning
            
                //Set Ai Speed

                cannon.vel = {
                    x: cannon.speed,
                    y: null
                };

                ball.vel = {
                    x: null,
                    y: ball.speed
                };

                ai.vel = {
                    x: ai.speed,
                    y: null
                }

                ai2.vel = {
                    x: ai2.speed,
                    y: null
                }

                ai3.vel = {
                    x: null,
                    y: ai3.speed
                }

                ai4.vel = {
                    x: null,
                    y: ai4.speed
                }

                ai5.vel = {
                    x: null,
                    y: ai5.speed
                };

                ai6.vel = {
                    x: ai6.speed,
                    y: ai6.speed
                };

                jin.vel = {
                    x: jin.speed,
                    y: jin.speed
                };

                ai7.vel = {
                    x: ai7.speed,
                    y: null
                };

                soldier.vel = {
                    x: soldier.speed,
                    y: null
                };

                ai8.vel = {
                    x: null,
                    y: ai4.speed
                };

                ai11.vel = {
                    x: ai6.speed,
                    y: ai6.speed
                };

                boss_sr.vel = {
                    x: boss_sr.speed,
                    y: boss_sr.speed
                };

                guard.vel = {
                    x: guard.speed,
                    y: guard.speed
                };

                ninja1.vel = {
                    x: null,
                    y: ninja1.speed
                };

                ninja2.vel = {
                    x: null,
                    y: ninja2.speed
                };

                spell.damage = attack;
                player.speed = speed;

                //Ai Health
                boss_sr.hp = 7000;

            };
        };

        var level11 = function(){
            player.x = WIDTH/2;
            player.y = HEIGHT - player.height;

            if(level === 11){
                //Make Ai's Stronger
                cannon.speed += 1;
                ball.speed += 1;
                
                ai3.speed += 1;
                ai4.speed += 1;
                
                ai6.speed += 0.25

                //Delete Items / Ai's
                speedBoost.vannish();
                attackBoost.vannish();
                healthBox.vannish();
                expBox.vannish();
                expBox2.vannish();
                expBox3.vannish();

                ai.vannish();
                ai2.vannish();
                ai3.vannish();
                ai4.vannish();
                ai5.vannish();
                ai6.vannish();
                ai7.vannish();
                ai8.vannish();
                ai9.vannish();
                ai10.vannish();
                ai11.vannish();
                guard.vannish();
                cannon.vannish();
                soldier.vannish();
                guard.vannish();
                ninja1.vannish();
                ninja2.vannish();
                jin.vannish();
                boss_sr.vannish();

                //Add Items
                
                speedBoost.x = 115;
                speedBoost.y = 56;
                

                //Ai Positioning
                
                cannon.x = WIDTH/2;
                cannon.y = 130;
                
                ball.x = -100;
                ball.y = -100;
                
                ai3.x = WIDTH/3;
                ai3.y = ai3.side;
                
                ai4.x = 2*(WIDTH/3);
                ai4.y = ai4.side;
                
                boulder.x = 0;
                boulder.y = -50;
                
                ai6.x = 1;
                ai6.y = ai6.side;
            
                //Set Ai Speed

                cannon.vel = {
                    x: cannon.speed,
                    y: null
                };

                ball.vel = {
                    x: null,
                    y: ball.speed
                };

                ai.vel = {
                    x: ai.speed,
                    y: null
                }

                ai2.vel = {
                    x: ai2.speed,
                    y: null
                }

                ai3.vel = {
                    x: null,
                    y: ai3.speed
                }

                ai4.vel = {
                    x: null,
                    y: ai4.speed
                }

                ai5.vel = {
                    x: null,
                    y: ai5.speed
                };

                ai6.vel = {
                    x: ai6.speed,
                    y: ai6.speed
                };

                jin.vel = {
                    x: jin.speed,
                    y: jin.speed
                };

                ai7.vel = {
                    x: ai7.speed,
                    y: null
                };

                soldier.vel = {
                    x: soldier.speed,
                    y: null
                };

                ai8.vel = {
                    x: null,
                    y: ai4.speed
                };

                ai11.vel = {
                    x: ai6.speed,
                    y: ai6.speed
                };

                boss_sr.vel = {
                    x: boss_sr.speed,
                    y: boss_sr.speed
                };

                guard.vel = {
                    x: guard.speed,
                    y: guard.speed
                };

                ninja1.vel = {
                    x: null,
                    y: ninja1.speed
                };

                ninja2.vel = {
                    x: null,
                    y: ninja2.speed
                };
                
                boulder.vel = {
                    x: boulder.speed,
                    y: boulder.speed
                };

                spell.damage = attack;
                player.speed = speed;

                //Ai Health
                cannon.hp = 15000;
                ball.hp = 5000;
                ai3.hp = 500;
                ai4.hp = 500;
                ai6.hp = 750;
                boulder.hp = 5000;
                
                
            };
        };

        var level12 = function(){
            player.x = 0;
            player.y = HEIGHT - player.height;

            if(level === 12){
                //Make Ai's Stronger
                boulder.speed += 1;

                //Delete Items / Ai's
                speedBoost.vannish();
                attackBoost.vannish();
                healthBox.vannish();
                expBox.vannish();
                expBox2.vannish();
                expBox3.vannish();

                ai.vannish();
                ai2.vannish();
                ai3.vannish();
                ai4.vannish();
                ai5.vannish();
                ai6.vannish();
                ai7.vannish();
                ai8.vannish();
                ai9.vannish();
                ai10.vannish();
                ai11.vannish();
                guard.vannish();
                cannon.vannish();
                soldier.vannish();
                guard.vannish();
                ninja1.vannish();
                ninja2.vannish();
                jin.vannish();
                boss_sr.vannish();

                //Add Items
                
                var x1 = (WIDTH/2)-(healthBox.side/2);
                var y1 = (HEIGHT/2)+(healthBox.side/2);
                
                healthBox.x = x1;
                healthBox.y = y1;
                

                //Ai Positioning
                
                ai9.alive = true;
                ai10.alive = true;
                
                boulder.x = 0;
                boulder.y = -50;
                
                boulder2.x = WIDTH-boulder2.side;
                boulder2.y = -50;
                
                ai5.x = x1 - 75;
                ai5.y = y1;
                
                ninja1.x = x1;
                ninja1.y = y1 + 75;
                
                ninja2.x = x1 + 75;
                ninja2.y = y1 - 75;
                
                ai9.x = -100;
                ai9.y = -100;

                ai10.x = -100;
                ai10.y = -100;
                
                //Set Ai Speed

                cannon.vel = {
                    x: cannon.speed,
                    y: null
                };

                ball.vel = {
                    x: null,
                    y: ball.speed
                };

                ai.vel = {
                    x: ai.speed,
                    y: null
                }

                ai2.vel = {
                    x: ai2.speed,
                    y: null
                }

                ai3.vel = {
                    x: null,
                    y: ai3.speed
                }

                ai4.vel = {
                    x: null,
                    y: ai4.speed
                }

                ai5.vel = {
                    x: null,
                    y: ai5.speed
                };

                ai6.vel = {
                    x: ai6.speed,
                    y: ai6.speed
                };

                jin.vel = {
                    x: jin.speed,
                    y: jin.speed
                };

                ai7.vel = {
                    x: ai7.speed,
                    y: null
                };

                soldier.vel = {
                    x: soldier.speed,
                    y: null
                };

                ai8.vel = {
                    x: null,
                    y: ai4.speed
                };

                ai11.vel = {
                    x: ai6.speed,
                    y: ai6.speed
                };

                boss_sr.vel = {
                    x: boss_sr.speed,
                    y: boss_sr.speed
                };

                guard.vel = {
                    x: guard.speed,
                    y: guard.speed
                };

                ninja1.vel = {
                    x: null,
                    y: ninja1.speed
                };

                ninja2.vel = {
                    x: null,
                    y: ninja2.speed
                };
                
                boulder.vel = {
                    x: boulder.speed,
                    y: boulder.speed
                };
                
                boulder2.vel = {
                    x: boulder2.speed,
                    y: boulder2.speed
                };

                spell.damage = attack;
                player.speed = speed;

                //Ai Health
             
                boulder.hp = 6000;
                boulder2.hp = 6000;
                ai5.hp = 12000;
                ninja1.hp = 12000;
                ninja2.hp = 12000;
                ai9.hp = 4500;
                ai10.hp = 4500;
                
            };
        };
        
        var level13 = function(){
            player.x = WIDTH-player.width;
            player.y = HEIGHT - player.height;

            if(level === 13){
                //Make Ai's Stronger
                 

                //Delete Items / Ai's
                speedBoost.vannish();
                attackBoost.vannish();
                healthBox.vannish();
                expBox.vannish();
                expBox2.vannish();
                expBox3.vannish();

                ai.vannish();
                ai2.vannish();
                ai3.vannish();
                ai4.vannish();
                ai5.vannish();
                ai6.vannish();
                ai7.vannish();
                ai8.vannish();
                ai9.vannish();
                ai10.vannish();
                ai11.vannish();
                guard.vannish();
                cannon.vannish();
                soldier.vannish();
                guard.vannish();
                ninja1.vannish();
                ninja2.vannish();
                jin.vannish();
                boss_sr.vannish();
                
                ai9.alive = false;
                ai10.alive = false;
                boulder.alive = false;
                boulder2.alive = false;
                
                ai9.vannish();
                ai10.vannish();
                boulder.vannish();
                boulder2.vannish();

                //Add Items
 

                //Ai Positioning
                
                aorith.x = 15;
                aorith.y = 125;
                
                aorith2.x = WIDTH/2;
                aorith2.y = HEIGHT/2;
                
                aorith3.x = WIDTH - 15;
                aorith3.y = HEIGHT - 125;
                 
                
                //Set Ai Speed

                cannon.vel = {
                    x: cannon.speed,
                    y: null
                };

                ball.vel = {
                    x: null,
                    y: ball.speed
                };

                ai.vel = {
                    x: ai.speed,
                    y: null
                }

                ai2.vel = {
                    x: ai2.speed,
                    y: null
                }

                ai3.vel = {
                    x: null,
                    y: ai3.speed
                }

                ai4.vel = {
                    x: null,
                    y: ai4.speed
                }

                ai5.vel = {
                    x: null,
                    y: ai5.speed
                };

                ai6.vel = {
                    x: ai6.speed,
                    y: ai6.speed
                };

                jin.vel = {
                    x: jin.speed,
                    y: jin.speed
                };

                ai7.vel = {
                    x: ai7.speed,
                    y: null
                };

                soldier.vel = {
                    x: soldier.speed,
                    y: null
                };

                ai8.vel = {
                    x: null,
                    y: ai4.speed
                };

                ai11.vel = {
                    x: ai6.speed,
                    y: ai6.speed
                };

                boss_sr.vel = {
                    x: boss_sr.speed,
                    y: boss_sr.speed
                };

                guard.vel = {
                    x: guard.speed,
                    y: guard.speed
                };

                ninja1.vel = {
                    x: null,
                    y: ninja1.speed
                };

                ninja2.vel = {
                    x: null,
                    y: ninja2.speed
                };
                
                boulder.vel = {
                    x: boulder.speed,
                    y: boulder.speed
                };
                
                boulder2.vel = {
                    x: boulder2.speed,
                    y: boulder2.speed
                };
                
                aorith.vel = {
                    x: aorith.speed,
                    y: aorith.speed
                };
                
                aorith2.vel = {
                    x: aorith2.speed,
                    y: aorith2.speed
                };
                
                aorith3.vel = {
                    x: aorith3.speed,
                    y: aorith3.speed
                };

                spell.damage = attack;
                player.speed = speed;

                //Ai Health
                aorith.hp = 5000;
                aorith2.hp = 5000;
                aorith3.hp = 5000;
                
            };
        };
        
        var level14 = function(){
            player.x = 0;
            player.y = HEIGHT - player.height;

            if(level === 14){
                //Make Ai's Stronger
                aorith.speed += 1;
                aorith2.speed += 1;
                aorith3.speed += 1;
                aorith4.speed += 1;
                
                ai6.speed += 0.25;
                jin.speed += 0.5;

                //Delete Items / Ai's
                speedBoost.vannish();
                attackBoost.vannish();
                healthBox.vannish();
                expBox.vannish();
                expBox2.vannish();
                expBox3.vannish();

                ai.vannish();
                ai2.vannish();
                ai3.vannish();
                ai4.vannish();
                ai5.vannish();
                ai6.vannish();
                ai7.vannish();
                ai8.vannish();
                ai9.vannish();
                ai10.vannish();
                ai11.vannish();
                guard.vannish();
                cannon.vannish();
                soldier.vannish();
                guard.vannish();
                ninja1.vannish();
                ninja2.vannish();
                jin.vannish();
                boss_sr.vannish();
                
                ai9.alive = false;
                ai10.alive = false;
                boulder.alive = false;
                boulder2.alive = false;
                
                aorith.alive = false;
                aorith2.alive = false;
                aorith3.alive = false;
                aorith4.alive = false;
                
                ai9.vannish();
                ai10.vannish();
                boulder.vannish();
                boulder2.vannish();
                
                aorith.vannish();
                aorith2.vannish();
                aorith3.vannish();
                aorith4.vannish();

                //Add Items
                
                

                //Ai Positioning
                aorith.alive = true;
                aorith2.alive = true;
                aorith3.alive = true;
                aorith4.alive = true;
                
                aorith.x = 5;
                aorith.y = 110;
                
                aorith2.x = 5;
                aorith2.y = 174;
                
                aorith3.x = WIDTH-aorith3.side-5;
                aorith3.y = 110;
                
                aorith4.x = WIDTH-aorith4.side-5;
                aorith4.y = 174;
                
                ai6.x = 1;
                ai6.y = 1;
                
                jin.x = WIDTH-jin.side-1;
                jin.y = 1
                 
                
                //Set Ai Speed

                cannon.vel = {
                    x: cannon.speed,
                    y: null
                };

                ball.vel = {
                    x: null,
                    y: ball.speed
                };

                ai.vel = {
                    x: ai.speed,
                    y: null
                }

                ai2.vel = {
                    x: ai2.speed,
                    y: null
                }

                ai3.vel = {
                    x: null,
                    y: ai3.speed
                }

                ai4.vel = {
                    x: null,
                    y: ai4.speed
                }

                ai5.vel = {
                    x: null,
                    y: ai5.speed
                };

                ai6.vel = {
                    x: ai6.speed,
                    y: ai6.speed
                };

                jin.vel = {
                    x: jin.speed,
                    y: jin.speed
                };

                ai7.vel = {
                    x: ai7.speed,
                    y: null
                };

                soldier.vel = {
                    x: soldier.speed,
                    y: null
                };

                ai8.vel = {
                    x: null,
                    y: ai4.speed
                };

                ai11.vel = {
                    x: ai6.speed,
                    y: ai6.speed
                };

                boss_sr.vel = {
                    x: boss_sr.speed,
                    y: boss_sr.speed
                };

                guard.vel = {
                    x: guard.speed,
                    y: guard.speed
                };

                ninja1.vel = {
                    x: null,
                    y: ninja1.speed
                };

                ninja2.vel = {
                    x: null,
                    y: ninja2.speed
                };
                
                boulder.vel = {
                    x: boulder.speed,
                    y: boulder.speed
                };
                
                boulder2.vel = {
                    x: boulder2.speed,
                    y: boulder2.speed
                };
                
                aorith.vel = {
                    x: aorith.speed,
                    y: aorith.speed
                };
                
                aorith2.vel = {
                    x: aorith2.speed,
                    y: aorith2.speed
                };
                
                aorith3.vel = {
                    x: aorith3.speed,
                    y: aorith3.speed
                };
                
                aorith4.vel = {
                    x: aorith4.speed,
                    y: aorith4.speed
                };

                spell.damage = attack;
                player.speed = speed;

                //Ai Health
                aorith.hp = 6000;
                aorith2.hp = 6000;
                aorith3.hp = 6000;
                aorith4.hp = 6000;
                
                ai6.hp = 1250;
                jin.hp = 1250;
                
            };
        };
        
        var level15 = function(){
            player.x = WIDTH-player.width;
            player.y = HEIGHT - player.height;

            if(level === 15){
                //Make Ai's Stronger
                lazer.speed += Math.random()*5;
                lazer2.speed += Math.random()*5;
                lazer3.speed += Math.random()*5;
                
                //Delete Items / Ai's
                speedBoost.vannish();
                attackBoost.vannish();
                healthBox.vannish();
                expBox.vannish();
                expBox2.vannish();
                expBox3.vannish();

                ai.vannish();
                ai2.vannish();
                ai3.vannish();
                ai4.vannish();
                ai5.vannish();
                ai6.vannish();
                ai7.vannish();
                ai8.vannish();
                ai9.vannish();
                ai10.vannish();
                ai11.vannish();
                guard.vannish();
                cannon.vannish();
                soldier.vannish();
                guard.vannish();
                ninja1.vannish();
                ninja2.vannish();
                jin.vannish();
                boss_sr.vannish();
                
                ai9.alive = false;
                ai10.alive = false;
                boulder.alive = false;
                boulder2.alive = false;
                
                aorith.alive = false;
                aorith2.alive = false;
                aorith3.alive = false;
                aorith4.alive = false;
                
                ai9.vannish();
                ai10.vannish();
                boulder.vannish();
                boulder2.vannish();
                
                aorith.vannish();
                aorith2.vannish();
                aorith3.vannish();
                aorith4.vannish();

                //Add Items
                
                
                //Ai Positioning
                var tx = -1*(turret.side/3);
                var ty = 115;
                
                var t2x = (WIDTH-turret2.side)+(turret2.side/3);
                var t2y = 170;
                
                var t3x = -1*(turret3.side/3);
                var t3y = 225;
                
                turret.x = tx;
                turret.y = ty;
                
                turret2.x = t2x;
                turret2.y = t2y;
                
                turret3.x = t3x;
                turret3.y = t3y;
                
                lazer.x = tx-34;
                lazer.y = ty+(turret.side/2.5);
                
                lazer2.x = t2x+34;
                lazer2.y = t2y+(turret2.side/2.5);
                
                lazer3.x = t3x-34;
                lazer3.y = t3y+(turret3.side/2.5);
                
                //Set Ai Speed

                cannon.vel = {
                    x: cannon.speed,
                    y: null
                };

                ball.vel = {
                    x: null,
                    y: ball.speed
                };

                ai.vel = {
                    x: ai.speed,
                    y: null
                }

                ai2.vel = {
                    x: ai2.speed,
                    y: null
                }

                ai3.vel = {
                    x: null,
                    y: ai3.speed
                }

                ai4.vel = {
                    x: null,
                    y: ai4.speed
                }

                ai5.vel = {
                    x: null,
                    y: ai5.speed
                };

                ai6.vel = {
                    x: ai6.speed,
                    y: ai6.speed
                };

                jin.vel = {
                    x: jin.speed,
                    y: jin.speed
                };

                ai7.vel = {
                    x: ai7.speed,
                    y: null
                };

                soldier.vel = {
                    x: soldier.speed,
                    y: null
                };

                ai8.vel = {
                    x: null,
                    y: ai4.speed
                };

                ai11.vel = {
                    x: ai6.speed,
                    y: ai6.speed
                };

                boss_sr.vel = {
                    x: boss_sr.speed,
                    y: boss_sr.speed
                };

                guard.vel = {
                    x: guard.speed,
                    y: guard.speed
                };

                ninja1.vel = {
                    x: null,
                    y: ninja1.speed
                };

                ninja2.vel = {
                    x: null,
                    y: ninja2.speed
                };
                
                boulder.vel = {
                    x: boulder.speed,
                    y: boulder.speed
                };
                
                boulder2.vel = {
                    x: boulder2.speed,
                    y: boulder2.speed
                };
                
                aorith.vel = {
                    x: aorith.speed,
                    y: aorith.speed
                };
                
                aorith2.vel = {
                    x: aorith2.speed,
                    y: aorith2.speed
                };
                
                aorith3.vel = {
                    x: aorith3.speed,
                    y: aorith3.speed
                };
                
                aorith4.vel = {
                    x: aorith4.speed,
                    y: aorith4.speed
                };
                
                turret.vel = {
                    x: turret.speed,
                    y: turret.speed
                };
                
                lazer.vel = {
                    x: lazer.speed,
                    y: null
                };
                
                turret2.vel = {
                    x: turret2.speed,
                    y: turret2.speed
                };
                
                lazer2.vel = {
                    x: lazer2.speed,
                    y: null
                };
                
                turret3.vel = {
                    x: turret3.speed,
                    y: turret3.speed
                };
                
                lazer3.vel = {
                    x: lazer3.speed,
                    y: null
                };

                spell.damage = attack;
                player.speed = speed;

                //Ai Health
                
            };
        };
        
        var level16 = function(){
            player.x = WIDTH/2 - (player.width/2);;
            player.y = HEIGHT - player.height;

            if(level === 16){
                //Make Ai's Stronger
                lazer.speed += Math.random()*8;
                lazer2.speed += Math.random()*8;
                lazer3.speed += Math.random()*8;
                lazer4.speed += Math.random()*11;
                
                ball.speed = 25;
                ball2.speed = 25;
                cannon.speed = 4;
                cannon2.speed = 4;
                
                //Delete Items / Ai's
                speedBoost.vannish();
                attackBoost.vannish();
                healthBox.vannish();
                expBox.vannish();
                expBox2.vannish();
                expBox3.vannish();

                ai.vannish();
                ai2.vannish();
                ai3.vannish();
                ai4.vannish();
                ai5.vannish();
                ai6.vannish();
                ai7.vannish();
                ai8.vannish();
                ai9.vannish();
                ai10.vannish();
                ai11.vannish();
                guard.vannish();
                cannon.vannish();
                soldier.vannish();
                guard.vannish();
                ninja1.vannish();
                ninja2.vannish();
                jin.vannish();
                boss_sr.vannish();
                
                ai9.alive = false;
                ai10.alive = false;
                boulder.alive = false;
                boulder2.alive = false;
                
                aorith.alive = false;
                aorith2.alive = false;
                aorith3.alive = false;
                aorith4.alive = false;
                
                ai9.vannish();
                ai10.vannish();
                boulder.vannish();
                boulder2.vannish();
                
                aorith.vannish();
                aorith2.vannish();
                aorith3.vannish();
                aorith4.vannish();

                //Add Items
                
                speedBoost.x = 5;
                speedBoost.y = 60;
                
                attackBoost.x = WIDTH-attackBoost.side-85;
                attackBoost.y = 35;
                
                //Ai Positioning
                var tx = -1*(turret.side/3);
                var ty = 200;
                
                var t2x = (WIDTH-turret2.side)+(turret2.side/3);
                var t2y = 310;
                
                var t3x = -1*(turret3.side/3);
                var t3y = 255;
                
                var t4x = (WIDTH-turret2.side)+(turret2.side/3);
                var t4y = 365;
                
                turret.x = tx;
                turret.y = ty;
                
                turret2.x = t2x;
                turret2.y = t2y;
                
                turret3.x = t3x;
                turret3.y = t3y;
                
                turret4.x = t4x;
                turret4.y = t4y;
                
                lazer.x = tx-34;
                lazer.y = ty+(turret.side/2.5);
                
                lazer2.x = t2x+34;
                lazer2.y = t2y+(turret2.side/2.5);
                
                lazer3.x = t3x-34;
                lazer3.y = t3y+(turret3.side/2.5);
                
                lazer4.x = t4x+34;
                lazer4.y = t4y+(turret4.side/2.5);
                
                cannon.x = 0;
                cannon.y = 105;
                
                ball.x = -100;
                ball.y = -100;
                
                cannon2.x = WIDTH-cannon2.side;
                cannon2.y = 145;
                
                ball2.x = -100;
                ball2.y = -100;
                
                //Set Ai Speed

                cannon.vel = {
                    x: cannon.speed,
                    y: null
                };

                ball.vel = {
                    x: null,
                    y: ball.speed
                };
                
                cannon2.vel = {
                    x: cannon2.speed,
                    y: null
                };

                ball2.vel = {
                    x: null,
                    y: ball2.speed
                };

                ai.vel = {
                    x: ai.speed,
                    y: null
                }

                ai2.vel = {
                    x: ai2.speed,
                    y: null
                }

                ai3.vel = {
                    x: null,
                    y: ai3.speed
                }

                ai4.vel = {
                    x: null,
                    y: ai4.speed
                }

                ai5.vel = {
                    x: null,
                    y: ai5.speed
                };

                ai6.vel = {
                    x: ai6.speed,
                    y: ai6.speed
                };

                jin.vel = {
                    x: jin.speed,
                    y: jin.speed
                };

                ai7.vel = {
                    x: ai7.speed,
                    y: null
                };

                soldier.vel = {
                    x: soldier.speed,
                    y: null
                };

                ai8.vel = {
                    x: null,
                    y: ai4.speed
                };

                ai11.vel = {
                    x: ai6.speed,
                    y: ai6.speed
                };

                boss_sr.vel = {
                    x: boss_sr.speed,
                    y: boss_sr.speed
                };

                guard.vel = {
                    x: guard.speed,
                    y: guard.speed
                };

                ninja1.vel = {
                    x: null,
                    y: ninja1.speed
                };

                ninja2.vel = {
                    x: null,
                    y: ninja2.speed
                };
                
                boulder.vel = {
                    x: boulder.speed,
                    y: boulder.speed
                };
                
                boulder2.vel = {
                    x: boulder2.speed,
                    y: boulder2.speed
                };
                
                aorith.vel = {
                    x: aorith.speed,
                    y: aorith.speed
                };
                
                aorith2.vel = {
                    x: aorith2.speed,
                    y: aorith2.speed
                };
                
                aorith3.vel = {
                    x: aorith3.speed,
                    y: aorith3.speed
                };
                
                aorith4.vel = {
                    x: aorith4.speed,
                    y: aorith4.speed
                };
                
                turret.vel = {
                    x: turret.speed,
                    y: turret.speed
                };
                
                lazer.vel = {
                    x: lazer.speed,
                    y: null
                };
                
                turret2.vel = {
                    x: turret2.speed,
                    y: turret2.speed
                };
                
                lazer2.vel = {
                    x: lazer2.speed,
                    y: null
                };
                
                turret3.vel = {
                    x: turret3.speed,
                    y: turret3.speed
                };
                
                lazer3.vel = {
                    x: lazer3.speed,
                    y: null
                };
                
                turret4.vel = {
                    x: turret4.speed,
                    y: turret4.speed
                };
                
                lazer4.vel = {
                    x: lazer4.speed,
                    y: null
                };

                spell.damage = attack;
                player.speed = speed;

                //Ai Health
                cannon.hp = 17000;
                ball.hp = 6500;
                cannon2.hp = 17000;
                ball2.hp = 6500;
                
            };
        };
            
        var level17 = function(){
            player.x = WIDTH/2 - (player.width/2);
            player.y = HEIGHT - player.height;

            if(level === 17){
                //Make Ai's Stronger
                boulder.speed += 1;
                boulder2.speed -= 0.5;
                
                lazer.speed += Math.random()*8;
                lazer2.speed += Math.random()*8;
                
                aorith.speed += 0.75;
                aorith2.speed += 0.75
                
                //Delete Items / Ai's
                speedBoost.vannish();
                attackBoost.vannish();
                healthBox.vannish();
                expBox.vannish();
                expBox2.vannish();
                expBox3.vannish();

                ai.vannish();
                ai2.vannish();
                ai3.vannish();
                ai4.vannish();
                ai5.vannish();
                ai6.vannish();
                ai7.vannish();
                ai8.vannish();
                ai9.vannish();
                ai10.vannish();
                ai11.vannish();
                guard.vannish();
                cannon.vannish();
                soldier.vannish();
                guard.vannish();
                ninja1.vannish();
                ninja2.vannish();
                jin.vannish();
                boss_sr.vannish();
                
                ai9.alive = false;
                ai10.alive = false;
                boulder.alive = false;
                boulder2.alive = false;
                
                aorith.alive = false;
                aorith2.alive = false;
                aorith3.alive = false;
                aorith4.alive = false;
                
                ai9.vannish();
                ai10.vannish();
                boulder.vannish();
                boulder2.vannish();
                
                aorith.vannish();
                aorith2.vannish();
                aorith3.vannish();
                aorith4.vannish();
                
                lazer.vannish();
                lazer2.vannish();
                lazer3.vannish();
                lazer4.vannish();
                
                turret.vannish();
                turret2.vannish();
                turret3.vannish();
                turret4.vannish();
                
                ball2.vannish();
                cannon2.vannish();

                //Add Items
                healthBox.x = WIDTH - healthBox.side - 200;
                healthBox.y = 45;
                
                //Ai Positioning
                
                boulder.alive = true;
                boulder2.alive = true;
                
                aorith.alive = true;
                aorith2.alive = true;
                
                boulder.x = 0;
                boulder.y = -50;
                
                boulder2.x = WIDTH-boulder2.side;
                boulder2.y = -50;
                
                
                var tx = -1*(turret.side/3);
                var ty = 175;
                
                var t2x = (WIDTH-turret2.side)+(turret2.side/3);
                var t2y = 110;
                
                
                turret.x = tx;
                turret.y = ty;
                
                turret2.x = t2x;
                turret2.y = t2y;
                
                lazer.x = tx-34;
                lazer.y = ty+(turret.side/2.5);
                
                lazer2.x = t2x+34;
                lazer2.y = t2y+(turret2.side/2.5); 
                
                aorith.x = 1;
                aorith.y = 230;
                
                aorith2.x = WIDTH-aorith.side-1;
                aorith2.y = 230;
                
                //Set Ai Speed

                cannon.vel = {
                    x: cannon.speed,
                    y: null
                };

                ball.vel = {
                    x: null,
                    y: ball.speed
                };
                
                cannon2.vel = {
                    x: cannon2.speed,
                    y: null
                };

                ball2.vel = {
                    x: null,
                    y: ball2.speed
                };

                ai.vel = {
                    x: ai.speed,
                    y: null
                }

                ai2.vel = {
                    x: ai2.speed,
                    y: null
                }

                ai3.vel = {
                    x: null,
                    y: ai3.speed
                }

                ai4.vel = {
                    x: null,
                    y: ai4.speed
                }

                ai5.vel = {
                    x: null,
                    y: ai5.speed
                };

                ai6.vel = {
                    x: ai6.speed,
                    y: ai6.speed
                };

                jin.vel = {
                    x: jin.speed,
                    y: jin.speed
                };

                ai7.vel = {
                    x: ai7.speed,
                    y: null
                };

                soldier.vel = {
                    x: soldier.speed,
                    y: null
                };

                ai8.vel = {
                    x: null,
                    y: ai4.speed
                };

                ai11.vel = {
                    x: ai6.speed,
                    y: ai6.speed
                };

                boss_sr.vel = {
                    x: boss_sr.speed,
                    y: boss_sr.speed
                };

                guard.vel = {
                    x: guard.speed,
                    y: guard.speed
                };

                ninja1.vel = {
                    x: null,
                    y: ninja1.speed
                };

                ninja2.vel = {
                    x: null,
                    y: ninja2.speed
                };
                
                boulder.vel = {
                    x: boulder.speed,
                    y: boulder.speed
                };
                
                boulder2.vel = {
                    x: boulder2.speed,
                    y: boulder2.speed
                };
                
                aorith.vel = {
                    x: aorith.speed,
                    y: aorith.speed
                };
                
                aorith2.vel = {
                    x: aorith2.speed,
                    y: aorith2.speed
                };
                
                aorith3.vel = {
                    x: aorith3.speed,
                    y: aorith3.speed
                };
                
                aorith4.vel = {
                    x: aorith4.speed,
                    y: aorith4.speed
                };
                
                turret.vel = {
                    x: turret.speed,
                    y: turret.speed
                };
                
                lazer.vel = {
                    x: lazer.speed,
                    y: null
                };
                
                turret2.vel = {
                    x: turret2.speed,
                    y: turret2.speed
                };
                
                lazer2.vel = {
                    x: lazer2.speed,
                    y: null
                };
                
                turret3.vel = {
                    x: turret3.speed,
                    y: turret3.speed
                };
                
                lazer3.vel = {
                    x: lazer3.speed,
                    y: null
                };
                
                turret4.vel = {
                    x: turret4.speed,
                    y: turret4.speed
                };
                
                lazer4.vel = {
                    x: lazer4.speed,
                    y: null
                };

                spell.damage = attack;
                player.speed = speed;

                //Ai Health
                boulder.hp = 7500;
                boulder2.hp = 7500;
               
                aorith.hp = 6800;
                aorith2.hp = 6800;
                
            };
        };
        
        var level18 = function(){
            player.x = 0;
            player.y = HEIGHT - player.height;

            if(level === 18){
                //Make Ai's Stronger
                
                //Delete Items / Ai's
                speedBoost.vannish();
                attackBoost.vannish();
                healthBox.vannish();
                expBox.vannish();
                expBox2.vannish();
                expBox3.vannish();

                ai.vannish();
                ai2.vannish();
                ai3.vannish();
                ai4.vannish();
                ai5.vannish();
                ai6.vannish();
                ai7.vannish();
                ai8.vannish();
                ai9.vannish();
                ai10.vannish();
                ai11.vannish();
                guard.vannish();
                cannon.vannish();
                soldier.vannish();
                guard.vannish();
                ninja1.vannish();
                ninja2.vannish();
                jin.vannish();
                boss_sr.vannish();
                
                ai9.alive = false;
                ai10.alive = false;
                boulder.alive = false;
                boulder2.alive = false;
                
                aorith.alive = false;
                aorith2.alive = false;
                aorith3.alive = false;
                aorith4.alive = false;
                
                ai9.vannish();
                ai10.vannish();
                boulder.vannish();
                boulder2.vannish();
                
                aorith.vannish();
                aorith2.vannish();
                aorith3.vannish();
                aorith4.vannish();
                
                lazer.vannish();
                lazer2.vannish();
                lazer3.vannish();
                lazer4.vannish();
                
                turret.vannish();
                turret2.vannish();
                turret3.vannish();
                turret4.vannish();
                
                ball2.vannish();
                cannon2.vannish();

                //Add Items
                
                //Ai Positioning
                qi.x = (WIDTH/2) - (qi.side/2);
                qi.y = 150;
                
                rock.x = (Math.random()+Math.random())*(WIDTH/2);
                rock.y = -200;
                
                rock2.x = (Math.random()+Math.random())*(WIDTH/1.8);
                rock2.y = -200;
                
                rock3.x = (Math.random()+Math.random())*(WIDTH/2);
                rock3.y = -200;
                
                rock4.x = (Math.random()+Math.random())*(WIDTH/2);
                rock4.y = -200;
                
                //Set Ai Speed

                cannon.vel = {
                    x: cannon.speed,
                    y: null
                };

                ball.vel = {
                    x: null,
                    y: ball.speed
                };
                
                cannon2.vel = {
                    x: cannon2.speed,
                    y: null
                };

                ball2.vel = {
                    x: null,
                    y: ball2.speed
                };

                ai.vel = {
                    x: ai.speed,
                    y: null
                }

                ai2.vel = {
                    x: ai2.speed,
                    y: null
                }

                ai3.vel = {
                    x: null,
                    y: ai3.speed
                }

                ai4.vel = {
                    x: null,
                    y: ai4.speed
                }

                ai5.vel = {
                    x: null,
                    y: ai5.speed
                };

                ai6.vel = {
                    x: ai6.speed,
                    y: ai6.speed
                };

                jin.vel = {
                    x: jin.speed,
                    y: jin.speed
                };

                ai7.vel = {
                    x: ai7.speed,
                    y: null
                };

                soldier.vel = {
                    x: soldier.speed,
                    y: null
                };

                ai8.vel = {
                    x: null,
                    y: ai4.speed
                };

                ai11.vel = {
                    x: ai6.speed,
                    y: ai6.speed
                };

                boss_sr.vel = {
                    x: boss_sr.speed,
                    y: boss_sr.speed
                };

                guard.vel = {
                    x: guard.speed,
                    y: guard.speed
                };

                ninja1.vel = {
                    x: null,
                    y: ninja1.speed
                };

                ninja2.vel = {
                    x: null,
                    y: ninja2.speed
                };
                
                rock.vel = {
                    x: rock.speed,
                    y: rock.speed
                };
                
                rock2.vel = {
                    x: rock2.speed,
                    y: rock2.speed
                };
                
                rock3.vel = {
                    x: rock3.speed,
                    y: rock3.speed
                };
                
                rock4.vel = {
                    x: rock4.speed,
                    y: rock4.speed
                };
                
                boulder.vel = {
                    x: boulder.speed,
                    y: boulder.speed
                };
                
                boulder2.vel = {
                    x: boulder2.speed,
                    y: boulder2.speed
                };
                
                qi.vel = {
                    x: qi.speed,
                    y: qi.speed
                };
                
                aorith.vel = {
                    x: aorith.speed,
                    y: aorith.speed
                };
                
                aorith2.vel = {
                    x: aorith2.speed,
                    y: aorith2.speed
                };
                
                aorith3.vel = {
                    x: aorith3.speed,
                    y: aorith3.speed
                };
                
                aorith4.vel = {
                    x: aorith4.speed,
                    y: aorith4.speed
                };
                
                turret.vel = {
                    x: turret.speed,
                    y: turret.speed
                };
                
                lazer.vel = {
                    x: lazer.speed,
                    y: null
                };
                
                turret2.vel = {
                    x: turret2.speed,
                    y: turret2.speed
                };
                
                lazer2.vel = {
                    x: lazer2.speed,
                    y: null
                };
                
                turret3.vel = {
                    x: turret3.speed,
                    y: turret3.speed
                };
                
                lazer3.vel = {
                    x: lazer3.speed,
                    y: null
                };
                
                turret4.vel = {
                    x: turret4.speed,
                    y: turret4.speed
                };
                
                lazer4.vel = {
                    x: lazer4.speed,
                    y: null
                };

                spell.damage = attack;
                player.speed = speed;

                //Ai Health
                qi.hp = 32000;
                
                rock.hp = 8500;
                rock2.hp = 8500;
                rock3.hp = 8500;
                rock4.hp = 8500;
                
            };
        };
        
        var epilogue = function(){
            player.x = (WIDTH/2) - (player.width/2);
            player.y = HEIGHT - player.height;
            
            if(level === 19){
                fade_block.transition = true;
                
                //Initiate x & y positions of text
                congrats.x = 300;
                congrats.y = -50;
                
                vic.x = 300;
                vic.y = -150;
                
                av.x = 300;
                av.y = -358;
                
                //Initiate text velocity
                congrats.vel = {
                    x: null,
                    y: congrats.speed
                }
                
                vic.vel = {
                    x: null,
                    y: vic.speed
                }
                
                av.vel = {
                    x: null,
                    y: av.speed
                }
            };
        };
        
        // Functions
        var main = function() {
            
            ctx.clearRect(0, 0, WIDTH, HEIGHT)
            ctx.drawImage(img1, 0, 0, WIDTH, HEIGHT);
            ctx.drawImage(img2, 0, 0, WIDTH, 100);

            Keystate = {};
            document.addEventListener('keydown', function(evt){
                Keystate[evt.keyCode] = true;
            });
            document.addEventListener('keyup', function(evt){
                delete Keystate[evt.keyCode];
            });

            window.addEventListener("keydown", function(e) {
                // space and arrow keys
                if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
                    e.preventDefault();
                }
            }, false);

            init();

            var loop = function(){ // Loops The Draw and Update Functions
                update();
                draw();

                window.requestAnimationFrame(loop, game);
            }

            window.requestAnimationFrame(loop, game);
        };

        var init = function() { // Initiates X & Y positions of objects
            player.x = (WIDTH / 2);
            player.y = (HEIGHT) - (player.height);

            spell.x = -100;
            spell.y = -100;

            img3.y = 50;
            img3.x = ((WIDTH/2)-50);

            level2_block.y = 50;
            level2_block.x = ((WIDTH/2)-50);

            level3_block.y = 50;
            level3_block.x = WIDTH-(level3_block.width+5);

            level4_block.y = 50;
            level4_block.x = ((WIDTH/2)-50);

            level5_block.y = 50;
            level5_block.x = 5;

            level6_block.y = 50;
            level6_block.x = WIDTH-(level6_block.width+5);

            level7_block.y = 50;
            level7_block.x = 5;

            level8_block.y = 50;
            level8_block.x = ((WIDTH/2)-50);

            level9_block.y = 50;
            level9_block.x = WIDTH-(level6_block.width+5);

            level10_block.y = 50;
            level10_block.x = ((WIDTH/2)-50);
            
            level11_block.y = 50;
            level11_block.x = ((WIDTH/2)-50);
            
            level12_block.y = 50;
            level12_block.x = WIDTH-(level12_block.width+5);
            
            level13_block.y = 50;
            level13_block.x = 5;
            
            level14_block.y = 50;
            level14_block.x = WIDTH-(level14_block.width+5);
            
            level15_block.y = 50;
            level15_block.x = ((WIDTH/2)-50);
            
            level16_block.y = 50;
            level16_block.x = ((WIDTH/2)-50);
            
            level17_block.y = 50;
            level17_block.x = 5;
            
            level18_block.y = 50;
            level18_block.x = (WIDTH/2)-50;

            ai.x = 0;
            ai.y = (HEIGHT/2) - 80;

            ai2.x = WIDTH-ai2.side;
            ai2.y = (HEIGHT/2) + 80;

            ai3.x = WIDTH/2;
            ai3.y = 0;

            ai.vel = {
                x: ai.speed,
                y: null
            }

            ai2.vel = {
                x: ai2.speed,
                y: null
            }

            ai3.vel = {
                x: null,
                y: ai3.speed
            }

            spell.damage = attack;
            ai.hp = 99;
            ai2.hp = 99;
            ai3.hp = 149;
            player.speed = speed;
        };

        var update = function() { // Updates Positions of objects
            player.update();
            spell_ball1.update();
            spell_ball2.update();
            spell_ball3.update();
            spell_ball4.update();
            spell_ball5.update();
            spell_ball6.update();
            img3.update();
            if(level === 2){
                level2_block.update();
                ai3.update();
                ai7.update();
            };
            if(level === 3){
                level3_block.update();
                ai3.update();
                ai4.update();
                ai8.update();
                ai5.update();
            };
            if(level === 4){
                level4_block.update();
                ai3.update();
                ai4.update();
                ai5.update();
                ai6.update();
                ai7.update();
            };
            if(level === 5){
                ai3.update();
                ai4.update();
                ai5.update();
                ai6.update();
                ai7.update();

                level5_block.update();
                boss_jr.update();
                block_1.update();
                block_2.update();
                block_3.update();
                block_4.update();
                block_5.update();
            };
            if(level === 6){
                level6_block.update();
                ai3.update();
                ai4.update();
                ai5.update();
                ai6.update();
                ai7.update();
                ai8.update();
                ai9.update();
                ai10.update();
                ai11.update();
            };
            if(level === 7){
                level7_block.update();
                ai3.update();
                ai4.update();
                ai5.update();
                ai6.update();
                ai7.update();
                ai8.update();
                ai9.update();
                ai10.update();
                ai11.update();
                guard.update();

                cannon.update();
                ball.update();
            };
            if(level === 8){
                level8_block.update();
                ai3.update();
                ai4.update();
                ai5.update();
                ai6.update();
                ai7.update();
                ai8.update();
                ai9.update();
                ai10.update();
                ai11.update();
                guard.update();
                soldier.update();

                cannon.update();
                ball.update();
                ai5.update();
                ninja1.update();
                ninja2.update();
            };
            if(level === 9){
                level9_block.update();
                ai3.update();
                ai4.update();
                ai5.update();
                ai6.update();
                ai7.update();
                ai8.update();
                ai9.update();
                ai10.update();
                ai11.update();
                guard.update();
                soldier.update();
                cannon.update();
                ball.update();
                ai5.update();
                ninja1.update();
                ninja2.update();
                jin.update();
            };
            if(level === 10){
                level10_block.update();
                ai3.update();
                ai4.update();
                ai5.update();
                ai7.update();
                ai8.update();
                ai9.update();
                ai10.update();
                ai11.update();
                soldier.update();
                cannon.update();
                ball.update();
                ai5.update();
                ninja1.update();
                ninja2.update();
                boss_sr.update();
                console.log(boss_sr.hp);
            };
            if(level === 11){
                level11_block.update();
                ai3.update();
                ai4.update();
                ai5.update();
                ai6.update();
                ai7.update();
                ai8.update();
                ai9.update();
                ai10.update();
                ai11.update();
                guard.update();
                soldier.update();
                cannon.update();
                ball.update();
                ai5.update();
                ninja1.update();
                ninja2.update();
                jin.update();
                boss_sr.update();
                boulder.update();
            };
            if(level === 12){
                level12_block.update();
                ai3.update();
                ai4.update();
                ai5.update();
                ai6.update();
                ai7.update();
                ai8.update();
                ai9.update();
                ai10.update();
                ai11.update();
                guard.update();
                soldier.update();
                cannon.update();
                ball.update();
                ai5.update();
                ninja1.update();
                ninja2.update();
                jin.update();
                boss_sr.update();
                boulder.update();
                boulder2.update();
            };
            if(level === 13){
                level13_block.update();
                ai3.update();
                ai4.update();
                ai5.update();
                ai6.update();
                ai7.update();
                ai8.update();
                ai9.update();
                ai10.update();
                ai11.update();
                guard.update();
                soldier.update();
                cannon.update();
                ball.update();
                ai5.update();
                ninja1.update();
                ninja2.update();
                jin.update();
                boss_sr.update();
                boulder.update();
                boulder2.update();
                aorith.update();
                aorith2.update();
                aorith3.update();
            };
            if(level === 14){
                level14_block.update();
                ai3.update();
                ai4.update();
                ai5.update();
                ai6.update();
                ai7.update();
                ai8.update();
                ai9.update();
                ai10.update();
                ai11.update();
                guard.update();
                soldier.update();
                cannon.update();
                ball.update();
                ai5.update();
                ninja1.update();
                ninja2.update();
                jin.update();
                boss_sr.update();
                boulder.update();
                boulder2.update();
                aorith.update();
                aorith2.update();
                aorith3.update();
                aorith4.update();
            };
            if(level === 15){
                level15_block.update();
                ai3.update();
                ai4.update();
                ai5.update();
                ai6.update();
                ai7.update();
                ai8.update();
                ai9.update();
                ai10.update();
                ai11.update();
                guard.update();
                soldier.update();
                cannon.update();
                ball.update();
                ai5.update();
                ninja1.update();
                ninja2.update();
                jin.update();
                boss_sr.update();
                boulder.update();
                boulder2.update();
                aorith.update();
                aorith2.update();
                aorith3.update();
                aorith4.update();
                turret.update();
                turret2.update();
                turret3.update();
                lazer.update();
                lazer2.update();
                lazer3.update();
            };
            if(level === 16){
                level16_block.update();
                ai3.update();
                ai4.update();
                ai5.update();
                ai6.update();
                ai7.update();
                ai8.update();
                ai9.update();
                ai10.update();
                ai11.update();
                guard.update();
                soldier.update();
                cannon.update();
                cannon2.update();
                ball.update();
                ball2.update();
                ai5.update();
                ninja1.update();
                ninja2.update();
                jin.update();
                boss_sr.update();
                boulder.update();
                boulder2.update();
                aorith.update();
                aorith2.update();
                aorith3.update();
                aorith4.update();
                turret.update();
                turret2.update();
                turret3.update();
                turret4.update();
                lazer.update();
                lazer2.update();
                lazer3.update();
                lazer4.update();
            };
            if(level === 17){
                level17_block.update();
                ai3.update();
                ai4.update();
                ai5.update();
                ai6.update();
                ai7.update();
                ai8.update();
                ai9.update();
                ai10.update();
                ai11.update();
                guard.update();
                soldier.update();
                cannon.update();
                cannon2.update();
                ball.update();
                ball2.update();
                ai5.update();
                ninja1.update();
                ninja2.update();
                jin.update();
                boss_sr.update();
                boulder.update();
                boulder2.update();
                aorith.update();
                aorith2.update();
                aorith3.update();
                aorith4.update();
                turret.update();
                turret2.update();
                turret3.update();
                turret4.update();
                lazer.update();
                lazer2.update();
                lazer3.update();
                lazer4.update();
            };
            if(level === 18){
                level18_block.update();
                ai3.update();
                ai4.update();
                ai5.update();
                ai6.update();
                ai7.update();
                ai8.update();
                ai9.update();
                ai10.update();
                ai11.update();
                guard.update();
                soldier.update();
                cannon.update();
                cannon2.update();
                ball.update();
                ball2.update();
                ai5.update();
                ninja1.update();
                ninja2.update();
                jin.update();
                boss_sr.update();
                boulder.update();
                boulder2.update();
                aorith.update();
                aorith2.update();
                aorith3.update();
                aorith4.update();
                turret.update();
                turret2.update();
                turret3.update();
                turret4.update();
                lazer.update();
                lazer2.update();
                lazer3.update();
                lazer4.update();
                qi.update();
                rock.update();
                rock2.update();
                rock3.update();
                rock4.update();
            };
            if(level === 19){
                congrats.update();
                vic.update();
                av.update();
            };
            ai.update();
            ai2.update();
        };

        var draw = function() { 
            // Draws objects to the canvas
            ctx.drawImage(img1, 0, 0, WIDTH, HEIGHT);
            ctx.drawImage(img2, 0, 0, WIDTH, 100);
            img3.draw();
            
            //Draw Items Onto Canvas
            healthBox.draw();
            expBox.draw();
            expBox2.draw();
            expBox3.draw();
            attackBoost.draw();
            speedBoost.draw();

            if(level === 2){
                level2_block.draw();
                
                //Draw Items Onto Canvas
                healthBox.draw();
                expBox.draw();
                expBox2.draw();
                expBox3.draw();
                attackBoost.draw();
                speedBoost.draw();
                
                ai3.draw();
                ai7.draw();

            };
            if(level === 3){
                level3_block.draw();
                
                //Draw Items Onto Canvas
                healthBox.draw();
                expBox.draw();
                expBox2.draw();
                expBox3.draw();
                attackBoost.draw();
                speedBoost.draw();
                
                ai3.draw();
                ai4.draw();
                ai8.draw();
                ai5.draw();
            };
            if(level === 4){
                level4_block.draw();
                
                //Draw Items Onto Canvas
                healthBox.draw();
                expBox.draw();
                expBox2.draw();
                expBox3.draw();
                attackBoost.draw();
                speedBoost.draw();
                
                ai3.draw();
                ai4.draw();
                ai5.draw();
                ai6.draw();
                ai7.draw();
            };
            if(level === 5){
                if(boss_jr.bool === true){
                    level5_block.draw();
                };
                
                //Draw Items Onto Canvas
                healthBox.draw();
                expBox.draw();
                expBox2.draw();
                expBox3.draw();
                attackBoost.draw();
                speedBoost.draw();
                
                ai3.draw();
                ai4.draw();
                ai5.draw();
                ai6.draw();
                ai7.draw();

                boss_jr.draw();
                block_1.draw();
                block_2.draw();
                block_3.draw();
                block_4.draw();
                block_5.draw();
            };
            if(level === 6){
                level6_block.draw();
                
                //Draw Items Onto Canvas
                healthBox.draw();
                expBox.draw();
                expBox2.draw();
                expBox3.draw();
                attackBoost.draw();
                speedBoost.draw();
                
                ai3.draw();
                ai4.draw();
                ai5.draw();
                ai6.draw();
                ai7.draw();
                ai8.draw();
                ai9.draw();
                ai10.draw();
                ai11.draw();
            };
            if(level === 7){
                level7_block.draw();
                
                //Draw Items Onto Canvas
                healthBox.draw();
                expBox.draw();
                expBox2.draw();
                expBox3.draw();
                attackBoost.draw();
                speedBoost.draw();
                
                ai6.draw();
                guard.draw();

                ball.draw();
                cannon.draw();
            };
            if(level === 8){
                level8_block.draw();
                
                //Draw Items Onto Canvas
                healthBox.draw();
                expBox.draw();
                expBox2.draw();
                expBox3.draw();
                attackBoost.draw();
                speedBoost.draw();
                
                ball.draw();
                cannon.draw();
                ai5.draw();
                ninja1.draw();
                ninja2.draw();
                ai.draw();
                ai2.draw();
                ai3.draw();
                ai4.draw();
                ai8.draw();
                ai7.draw();
                soldier.draw();
            };
            if(level === 9){
                level9_block.draw();
                
                //Draw Items Onto Canvas
                healthBox.draw();
                expBox.draw();
                expBox2.draw();
                expBox3.draw();
                attackBoost.draw();
                speedBoost.draw();

                ai6.draw();
                guard.draw();
                jin.draw();
            };
            if(level === 10){
                if(boss_sr.bool === true){
                    level10_block.y = 50;
                    level10_block.x = ((WIDTH/2)-50);
                    
                    level10_block.draw();
                } else {
                    level10_block.vannish();
                };
                
                //Draw Items Onto Canvas
                healthBox.draw();
                expBox.draw();
                expBox2.draw();
                expBox3.draw();
                attackBoost.draw();
                speedBoost.draw();

                boss_sr.draw();
            };
            if(level === 11){
                level11_block.draw();
                
                //Draw Items Onto Canvas
                healthBox.draw();
                expBox.draw();
                expBox2.draw();
                expBox3.draw();
                attackBoost.draw();
                speedBoost.draw();
                
                ball.draw();
                cannon.draw();
                
                ai3.draw();
                ai4.draw();
                ai6.draw();
                
                boulder.draw();
            };
            
            if(level === 12){
                level12_block.draw();
                
                //Draw Items Onto Canvas
                healthBox.draw();
                expBox.draw();
                expBox2.draw();
                expBox3.draw();
                attackBoost.draw();
                speedBoost.draw();
                
                ai5.draw();
                ninja1.draw();
                ninja2.draw();
                
                ai9.draw();
                ai10.draw();
                
                boulder.draw();
                boulder2.draw();
            };
            
            if(level === 13){
                level13_block.draw();
                
                //Draw Items Onto Canvas
                healthBox.draw();
                expBox.draw();
                expBox2.draw();
                expBox3.draw();
                attackBoost.draw();
                speedBoost.draw();
                
                //Draw enemes
                aorith.draw();
                aorith2.draw();
                aorith3.draw();
            };
            
            if(level === 14){
                level14_block.draw();
                
                //Draw Items Onto Canvas
                healthBox.draw();
                expBox.draw();
                expBox2.draw();
                expBox3.draw();
                attackBoost.draw();
                speedBoost.draw();
                
                //Draw enemies
                aorith.draw();
                aorith2.draw();
                aorith3.draw();
                aorith4.draw();
                
                ai6.draw();
                jin.draw();
            };
            
            if(level === 15){
                level15_block.draw();
                
                //Draw Items Onto Canvas
                healthBox.draw();
                expBox.draw();
                expBox2.draw();
                expBox3.draw();
                attackBoost.draw();
                speedBoost.draw();
                
                //Draw enemies
                lazer.draw();
                lazer2.draw();
                lazer3.draw();
                turret.draw();
                turret2.draw();
                turret3.draw();
            };
            
            if(level === 16){
                level16_block.draw();
                
                //Draw Items Onto Canvas
                healthBox.draw();
                expBox.draw();
                expBox2.draw();
                expBox3.draw();
                attackBoost.draw();
                speedBoost.draw();
                
                //Draw enemies
                ball.draw();
                ball2.draw();
                cannon.draw();
                cannon2.draw();
                
                lazer.draw();
                lazer2.draw();
                lazer3.draw();
                lazer4.draw();
                turret.draw();
                turret2.draw();
                turret3.draw();
                turret4.draw();
            };
            
            if(level === 17){
                level17_block.draw();
                
                //Draw Items Onto Canvas
                healthBox.draw();
                expBox.draw();
                expBox2.draw();
                expBox3.draw();
                attackBoost.draw();
                speedBoost.draw();
                
                //Draw enemies
                aorith.draw();
                aorith2.draw();
                
                lazer.draw();
                lazer2.draw();
                lazer3.draw();
                lazer4.draw();
                                
                turret.draw();
                turret2.draw();
                turret3.draw();
                turret4.draw();
                
                boulder.draw();
                boulder2.draw();
                
            };
            
            if(level === 18){
                if(qi.alive === false){
                    level18_block.y = 50;
                    level18_block.x = (WIDTH/2)-50;
                    
                    level18_block.draw();
                } else {
                    level18_block.vannish();
                };
                
                //Draw Items Onto Canvas
                healthBox.draw();
                expBox.draw();
                expBox2.draw();
                expBox3.draw();
                attackBoost.draw();
                speedBoost.draw();
                
                //Draw enemies
                qi.draw();
                
                rock.draw();
                rock2.draw();
                rock3.draw();
                rock4.draw();
             };



            ctx.save();

                ai.draw();
                ai2.draw();
            
                spell.draw();
                player.draw();
            
                spell_ball1.draw();
                spell_ball2.draw();
                spell_ball3.draw();
                spell_ball4.draw();
                spell_ball5.draw();
                spell_ball6.draw();

                //Draw Stats
                levelw.draw();
                healthw.draw();
                attackw.draw();
                speedw.draw();
                expw.draw();
                rankw.draw();
                ctx.globalAlpha = 1;

            ctx.restore();
            
            fadein_block.draw();
            fadeout_block.draw();
            fade_block.draw();
            
            if(level === 19){
                congrats.draw();
                vic.draw();
                av.draw();
            };
            
        };

        main();
    };
    level1();
    
    }

    //start();

    // Canvas Variables
    var WIDTH = 600;
    var HEIGHT = (WIDTH/12)*9;
    var game;
    var ctx;

    // Sets The Canvas
    game = document.getElementById('game');

    game.width = WIDTH;
    game.height = HEIGHT;
            
    game.style.height = '58.59375%';
    game.style.width = '43.923865300146414%';

    ctx = game.getContext('2d');

    ctx.fillStyle = "#0CCF77";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    ctx.fillStyle = "#00ccaa";
    ctx.fillRect(150, 150, 300, 150);

    ctx.fillStyle = "#111";
    ctx.font = "bold 40pt Verdana";
    ctx.textAlign = "center";
    ctx.fillText("Start", WIDTH/2, HEIGHT/1.9);
    ctx.textAlign = "left";

    ctx.fillStyle = "#272727";
    ctx.lineWidth = 10;
    ctx.strokeRect(150, 150, 300, 150);

    if(firstTime){
        game.addEventListener("click", function(){
            if(firstTime){
                start();
            }
        });
    }
};
