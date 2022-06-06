
GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    preload: function() {
        var me=this;
        me.load.image('background',"assets/img/IMG_20220606_140421.jpg");
        me.load.spritesheet("cat","assets/img/ejecutando-chubby-cat-cartoon-game-character-animation-sprite_12402-184-removebg-preview.png",223,139);
        
    },
    create: function() {
        var me=this;
        me.game.add.sprite(0, 0, 'background');
        
        /*me.crow= me.game.add.sprite(50,50,"crow");
        me.crow.animations.add("right",[0,1,2,3],2,true);
        me.crow.animations.add("left",[4,5,6,7],8,true);
        me.crow.animations.play("right");*/
        
        me.cat=me.game.add.sprite(100,350,"cat");
        me.cat.animations.add("right",[0,1,2,3,4,5,6,7],10,true);
        /*me.man.animations.add("left",[15,14,13,12,11,10,9,8],10,true);*/
        me.game.cursores=me.input.keyboard.createCursorKeys();
        me.game.physics.startSystem(Phaser.Physics.ARCADE);
        me.cat.animations.play("right");
    },
    update: function() {
        var me=this;
        me.cat.x+=1;
       /* me.crow.x+=2;
        me.man.x+=1;
        if(me.crow.x>=me.game.world.width){
            me.crow.x=-100;
            }*/
        if(me.cat.x>=me.game.world.width){
            me.cat.x=-100;
            }
        
        
    }
}

var game = new Phaser.Game(1920, 865, Phaser.CANVAS);
    
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");
