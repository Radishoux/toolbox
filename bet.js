////////////////////////

var betlogs;
var up;
var down;
var pour;
var contre;
var upour;
var dead;

function f1() {
    betlogs = [];
    for (let i = 0; i < ray.length - 4; i++) {
        var num = ray[i].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].innerHTML;
        var upx = ray[i].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].innerHTML;
        var downx = ray[i].childNodes[0].childNodes[0].childNodes[1].childNodes[2].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].innerHTML;
        var win = ray[i].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[1].childNodes[0].getAttribute("color") == "success" ? "up" : "down";

        betlogs.push([num, parseFloat(upx.replace(",", ".").replace("x", "")), parseFloat(downx.replace(",", ".").replace("x", "")), win])
    }
}

function f2(bl) {
    console.log(bl.length);

    up = 300;
    down = 300;
    pour = 300;
    contre = 300;
    upour = 300;

    dead = {
        up: [],
        down: [],
        pour: [],
        contre: [],
        upour: []
    };

    win = {
        up: 0,
        down: 0,
        pour: 0,
        contre: 0
    };

    for (let i = 0; i < bl.length; i++) {
        up -= 30;
        down -= 30;
        pour -= 30;
        contre -= 30;

        if (up < 0) dead.up[i] = true;
        if (down < 0) dead.down[i] = true;
        if (pour < 0) dead.pour[i] = true;
        if (contre < 0) dead.contre[i] = true;

        bl[i][3] == "up" ? (up += (30 * bl[i][1])) : (down += (30 * bl[i][2]));
        bl[i][3] == "up" ? win.up += 1 : win.down += 1;

        var ptit;
        bl[i][1] < bl[i][2] ? ptit = bl[i][1] : ptit = bl[i][2]
        var gros;
        bl[i][1] < bl[i][2] ? gros = bl[i][2] : gros = bl[i][1]

        if ((bl[i][3] == "up" && ptit == bl[i][1]) || (bl[i][3] == "down" && ptit == bl[i][2]))
            (pour += (30 * ptit));
        else
            (contre += (30 * gros));


        if ((bl[i][3] == "up" && ptit == bl[i][1]) || (bl[i][3] == "down" && ptit == bl[i][2]))
            win.pour += 1;
        else
            win.contre += 1;
    }

    console.log("up", up)
    console.log("down", down)
    console.log("pour", pour)
    console.log("contre", contre)
    console.log("dead", dead)
    console.log("win", win)
}

var ray = document.getElementsByClassName("swiper-slide")

////////////////////////

var archives = {
    "12718to12767": '[[\"#12718\",1.91,2.1,\"up\"],[\"#12719\",1.51,2.95,\"down\"],[\"#12720\",1.55,2.83,\"up\"],[\"#12721\",2.04,1.96,\"up\"],[\"#12722\",1.6,2.67,\"up\"],[\"#12723\",2.01,1.99,\"up\"],[\"#12724\",2.32,1.76,\"down\"],[\"#12725\",2.13,1.88,\"down\"],[\"#12726\",2.94,1.51,\"down\"],[\"#12727\",1.32,4.1,\"up\"],[\"#12728\",1.22,5.64,\"up\"],[\"#12729\",1.99,2.01,\"down\"],[\"#12730\",2.27,1.79,\"down\"],[\"#12731\",6.52,1.18,\"down\"],[\"#12732\",1.64,2.56,\"up\"],[\"#12733\",4.77,1.26,\"down\"],[\"#12734\",1.14,8.04,\"up\"],[\"#12735\",1.36,3.79,\"down\"],[\"#12736\",2.7,1.59,\"down\"],[\"#12737\",3.71,1.37,\"down\"],[\"#12738\",5.96,1.2,\"down\"],[\"#12739\",1.92,2.08,\"down\"],[\"#12740\",7.36,1.16,\"down\"],[\"#12741\",2.87,1.53,\"up\"],[\"#12742\",1.56,2.79,\"down\"],[\"#12743\",7.1,1.16,\"down\"],[\"#12744\",1.25,5.03,\"up\"],[\"#12745\",4.2,1.31,\"up\"],[\"#12746\",1.5,2.99,\"up\"],[\"#12747\",1.97,2.03,\"down\"],[\"#12748\",1.73,2.36,\"down\"],[\"#12749\",2.24,1.81,\"down\"],[\"#12750\",2.95,1.51,\"down\"],[\"#12751\",2.24,1.81,\"down\"],[\"#12752\",1.13,8.62,\"up\"],[\"#12753\",2.45,1.69,\"up\"],[\"#12754\",1.13,8.95,\"up\"],[\"#12755\",5.14,1.24,\"down\"],[\"#12756\",3.01,1.5,\"down\"],[\"#12757\",1.56,2.8,\"up\"],[\"#12758\",2.68,1.6,\"down\"],[\"#12759\",1.23,5.33,\"up\"],[\"#12760\",2.94,1.52,\"up\"],[\"#12761\",1.28,4.61,\"up\"],[\"#12762\",1.32,4.17,\"up\"],[\"#12763\",4.29,1.3,\"down\"],[\"#12764\",1.21,5.81,\"up\"],[\"#12765\",3.12,1.47,\"down\"],[\"#12766\",9.12,1.12,\"down\"],[\"#12767\",1.16,7.14,\"up\"]]',
    "12768to12817": '[[\"#12768\",1.47,3.11,\"up\"],[\"#12769\",2.71,1.59,\"down\"],[\"#12770\",6.11,1.2,\"up\"],[\"#12771\",1.36,3.81,\"down\"],[\"#12772\",1.31,4.26,\"up\"],[\"#12773\",6.51,1.18,\"down\"],[\"#12774\",1.11,10.22,\"up\"],[\"#12775\",3.09,1.48,\"down\"],[\"#12776\",2.34,1.75,\"down\"],[\"#12777\",1.16,7.32,\"up\"],[\"#12778\",1.37,3.69,\"down\"],[\"#12779\",2.4,1.71,\"up\"],[\"#12780\",1.27,4.64,\"up\"],[\"#12781\",1.95,2.05,\"down\"],[\"#12782\",2.1,1.91,\"down\"],[\"#12783\",3.87,1.35,\"down\"],[\"#12784\",1.7,2.44,\"up\"],[\"#12785\",1.13,8.59,\"up\"],[\"#12786\",4.87,1.26,\"down\"],[\"#12787\",3.11,1.47,\"down\"],[\"#12788\",2.12,1.89,\"down\"],[\"#12789\",1.45,3.24,\"up\"],[\"#12790\",6.91,1.17,\"down\"],[\"#12791\",1.73,2.37,\"up\"],[\"#12792\",3.55,1.39,\"up\"],[\"#12793\",5.7,1.21,\"up\"],[\"#12794\",4.42,1.29,\"up\"],[\"#12795\",2.06,1.94,\"down\"],[\"#12796\",3.88,1.35,\"down\"],[\"#12797\",4.55,1.28,\"up\"],[\"#12798\",1.23,5.44,\"up\"],[\"#12799\",2.71,1.59,\"up\"],[\"#12800\",1.21,5.65,\"up\"],[\"#12801\",1.8,2.25,\"up\"],[\"#12802\",3.01,1.5,\"down\"],[\"#12803\",4.87,1.26,\"up\"],[\"#12804\",3.9,1.34,\"down\"],[\"#12805\",1.52,2.94,\"up\"],[\"#12806\",2.25,1.8,\"down\"],[\"#12807\",1.56,2.77,\"up\"],[\"#12808\",8.43,1.13,\"down\"],[\"#12809\",2.21,1.83,\"down\"],[\"#12810\",2.83,1.55,\"down\"],[\"#12811\",2.39,1.72,\"up\"],[\"#12812\",1.9,2.12,\"up\"],[\"#12813\",2.53,1.65,\"up\"],[\"#12814\",1.4,3.48,\"up\"],[\"#12815\",2.83,1.55,\"down\"],[\"#12816\",1.39,3.54,\"up\"],[\"#12817\",2.38,1.72,\"down\"]]',
    "12818to12847": '[[\"#12818\",3.09,1.48,\"down\"],[\"#12819\",5.69,1.21,\"up\"],[\"#12820\",1.53,2.89,\"up\"],[\"#12821\",5.35,1.23,\"down\"],[\"#12822\",2.1,1.91,\"up\"],[\"#12823\",4.23,1.31,\"down\"],[\"#12824\",4.49,1.29,\"down\"],[\"#12825\",4.5,1.29,\"down\"],[\"#12826\",1.31,4.19,\"up\"],[\"#12827\",1.66,2.51,\"up\"],[\"#12828\",1.95,2.05,\"up\"],[\"#12829\",1.32,4.16,\"down\"],[\"#12830\",3.96,1.34,\"up\"],[\"#12831\",1.89,2.12,\"down\"],[\"#12832\",3.12,1.47,\"down\"],[\"#12833\",1.33,4.05,\"up\"],[\"#12834\",2.22,1.82,\"down\"],[\"#12835\",1.78,2.28,\"up\"],[\"#12836\",1.52,2.92,\"up\"],[\"#12837\",5.76,1.21,\"down\"],[\"#12838\",1.31,4.22,\"up\"],[\"#12839\",2.04,1.96,\"up\"],[\"#12840\",2.06,1.95,\"down\"],[\"#12841\",2.08,1.92,\"up\"],[\"#12842\",1,0,\"down\"],[\"#12843\",0,0,\"down\"],[\"#12844\",0,0,\"up\"],[\"#12845\",0,0,\"up\"],[\"#12846\",0,0,\"up\"],[\"#12847\",0,0,\"up\"]]',
    "13344to13393": '[[\"#13344\",4.93,1.25,\"down\"],[\"#13345\",1.82,2.23,\"up\"],[\"#13346\",1.29,4.39,\"up\"],[\"#13347\",1.24,5.1,\"up\"],[\"#13348\",3.31,1.43,\"down\"],[\"#13349\",1.44,3.27,\"up\"],[\"#13350\",1.27,4.75,\"up\"],[\"#13351\",2.08,1.92,\"up\"],[\"#13352\",1.11,10.39,\"up\"],[\"#13353\",2.46,1.69,\"down\"],[\"#13354\",4.12,1.32,\"down\"],[\"#13355\",2.01,1.99,\"up\"],[\"#13356\",1.65,2.54,\"up\"],[\"#13357\",1.26,4.91,\"up\"],[\"#13358\",1.68,2.48,\"up\"],[\"#13359\",1.13,8.6,\"up\"],[\"#13360\",1.34,3.96,\"up\"],[\"#13361\",4.35,1.3,\"down\"],[\"#13362\",2.29,1.77,\"up\"],[\"#13363\",1.15,7.72,\"up\"],[\"#13364\",1.46,3.16,\"down\"],[\"#13365\",2.39,1.72,\"up\"],[\"#13366\",1.69,2.45,\"up\"],[\"#13367\",1.69,2.45,\"up\"],[\"#13368\",1.2,5.93,\"up\"],[\"#13369\",2.67,1.6,\"down\"],[\"#13370\",1.13,8.57,\"up\"],[\"#13371\",1.59,2.7,\"up\"],[\"#13372\",8.23,1.14,\"down\"],[\"#13373\",2.11,1.9,\"up\"],[\"#13374\",1.12,9.27,\"up\"],[\"#13375\",1.91,2.1,\"down\"],[\"#13376\",1.85,2.18,\"up\"],[\"#13377\",1.25,5.02,\"down\"],[\"#13378\",6.31,1.19,\"down\"],[\"#13379\",1.14,8.32,\"up\"],[\"#13380\",2.3,1.77,\"down\"],[\"#13381\",3.56,1.39,\"down\"],[\"#13382\",4.47,1.29,\"up\"],[\"#13383\",2.15,1.87,\"down\"],[\"#13384\",4.77,1.27,\"down\"],[\"#13385\",1.45,3.23,\"up\"],[\"#13386\",1.12,9.04,\"up\"],[\"#13387\",1.37,3.72,\"up\"],[\"#13388\",1.28,4.53,\"up\"],[\"#13389\",3.74,1.36,\"up\"],[\"#13390\",1.19,6.3,\"up\"],[\"#13391\",1.36,3.81,\"up\"],[\"#13392\",1.62,2.6,\"up\"],[\"#13393\",1.88,2.14,\"down\"]]',
    "13599to13648": '[[\"#13599\",2.12,1.89,\"down\"],[\"#13600\",2.21,1.83,\"up\"],[\"#13601\",2.1,1.91,\"down\"],[\"#13602\",11.85,1.09,\"down\"],[\"#13603\",1.15,7.88,\"up\"],[\"#13604\",2.57,1.64,\"down\"],[\"#13605\",2.31,1.76,\"up\"],[\"#13606\",1.44,3.25,\"down\"],[\"#13607\",2.15,1.87,\"down\"],[\"#13608\",2.26,1.79,\"down\"],[\"#13609\",1.18,6.49,\"up\"],[\"#13610\",1.36,3.75,\"down\"],[\"#13611\",1.32,4.17,\"down\"],[\"#13612\",2.75,1.57,\"down\"],[\"#13613\",1.46,3.16,\"down\"],[\"#13614\",2.9,1.53,\"up\"],[\"#13615\",1.57,2.75,\"up\"],[\"#13616\",1.27,4.72,\"up\"],[\"#13617\",1.93,2.08,\"down\"],[\"#13618\",7.98,1.14,\"down\"],[\"#13619\",2.09,1.91,\"up\"],[\"#13620\",4.31,1.3,\"down\"],[\"#13621\",2.36,1.74,\"up\"],[\"#13622\",1.15,7.53,\"up\"],[\"#13623\",1.56,2.77,\"down\"],[\"#13624\",5.36,1.23,\"down\"],[\"#13625\",2.73,1.58,\"down\"],[\"#13626\",1.82,2.21,\"up\"],[\"#13627\",2.01,1.99,\"down\"],[\"#13628\",1.81,2.24,\"up\"],[\"#13629\",1.52,2.93,\"up\"],[\"#13630\",2.06,1.94,\"down\"],[\"#13631\",7.3,1.16,\"down\"],[\"#13632\",2.88,1.53,\"up\"],[\"#13633\",1.65,2.54,\"up\"],[\"#13634\",2.05,1.95,\"up\"],[\"#13635\",2.8,1.56,\"up\"],[\"#13636\",1.83,2.2,\"up\"],[\"#13637\",2.77,1.56,\"down\"],[\"#13638\",1.83,2.2,\"up\"],[\"#13639\",6.89,1.17,\"down\"],[\"#13640\",2.04,1.96,\"down\"],[\"#13641\",1.85,2.17,\"up\"],[\"#13642\",1.79,2.27,\"down\"],[\"#13643\",9.64,1.12,\"down\"],[\"#13644\",1.28,4.59,\"up\"],[\"#13645\",1.35,3.87,\"up\"],[\"#13646\",2.09,1.92,\"down\"],[\"#13647\",4.19,1.31,\"down\"],[\"#13648\",3.96,1.34,\"up\"]]',
    "13649to13698": '[[\"#13649\",1.76,2.31,\"up\"],[\"#13650\",2.72,1.58,\"down\"],[\"#13651\",1.45,3.23,\"up\"],[\"#13652\",1.13,8.47,\"up\"],[\"#13653\",2.56,1.64,\"down\"],[\"#13654\",1.9,2.11,\"down\"],[\"#13655\",1.92,2.09,\"up\"],[\"#13656\",2.09,1.92,\"down\"],[\"#13657\",1.8,2.24,\"up\"],[\"#13658\",1.73,2.36,\"up\"],[\"#13659\",2.4,1.72,\"down\"],[\"#13660\",3.16,1.46,\"up\"],[\"#13661\",1.33,4.01,\"down\"],[\"#13662\",2.38,1.73,\"up\"],[\"#13663\",1.93,2.07,\"up\"],[\"#13664\",3.96,1.34,\"down\"],[\"#13665\",1.64,2.55,\"down\"],[\"#13666\",9.16,1.12,\"down\"],[\"#13667\",2.03,1.98,\"down\"],[\"#13668\",3.99,1.33,\"down\"],[\"#13669\",1.45,3.24,\"up\"],[\"#13670\",1.17,6.9,\"up\"],[\"#13671\",1.22,5.48,\"up\"],[\"#13672\",1.38,3.6,\"up\"],[\"#13673\",2.92,1.52,\"down\"],[\"#13674\",1.73,2.37,\"down\"],[\"#13675\",1.38,3.6,\"up\"],[\"#13676\",1.07,14.97,\"up\"],[\"#13677\",4.66,1.27,\"down\"],[\"#13678\",1.76,2.32,\"up\"],[\"#13679\",1.58,2.73,\"up\"],[\"#13680\",8.14,1.14,\"down\"],[\"#13681\",2.52,1.66,\"down\"],[\"#13682\",1.73,2.38,\"up\"],[\"#13683\",1.3,4.35,\"up\"],[\"#13684\",1.66,2.52,\"up\"],[\"#13685\",1.24,5.13,\"down\"],[\"#13686\",2.65,1.61,\"up\"],[\"#13687\",1.78,2.29,\"up\"],[\"#13688\",1.19,6.14,\"down\"],[\"#13689\",1.42,3.37,\"up\"],[\"#13690\",2.01,1.99,\"up\"],[\"#13691\",5.24,1.24,\"down\"],[\"#13692\",2.62,1.62,\"down\"],[\"#13693\",1.88,2.13,\"down\"],[\"#13694\",1.61,2.64,\"up\"],[\"#13695\",1.57,2.76,\"up\"],[\"#13696\",1.52,2.91,\"down\"],[\"#13697\",2.37,1.73,\"up\"],[\"#13698\",1.62,2.63,\"down\"]]',
    "13699to13748": '[[\"#13699\",10.09,1.11,\"down\"],[\"#13700\",1.58,2.71,\"up\"],[\"#13701\",2.82,1.55,\"down\"],[\"#13702\",1.98,2.02,\"up\"],[\"#13703\",2.07,1.93,\"down\"],[\"#13704\",1.73,2.37,\"up\"],[\"#13705\",1.32,4.09,\"up\"],[\"#13706\",1.2,6.11,\"up\"],[\"#13707\",1.32,4.17,\"up\"],[\"#13708\",1.42,3.37,\"up\"],[\"#13709\",1.16,7.24,\"down\"],[\"#13710\",1.92,2.08,\"down\"],[\"#13711\",3.39,1.42,\"up\"],[\"#13712\",1.17,6.79,\"up\"],[\"#13713\",4.94,1.25,\"down\"],[\"#13714\",2.21,1.83,\"up\"],[\"#13715\",1.17,7.02,\"up\"],[\"#13716\",1.87,2.15,\"up\"],[\"#13717\",1.53,2.88,\"up\"],[\"#13718\",7.28,1.16,\"down\"],[\"#13719\",3.01,1.5,\"down\"],[\"#13720\",1.57,2.77,\"down\"],[\"#13721\",3.45,1.41,\"up\"],[\"#13722\",1.31,4.18,\"up\"],[\"#13723\",2.13,1.89,\"up\"],[\"#13724\",2.82,1.55,\"down\"],[\"#13725\",4.65,1.27,\"down\"],[\"#13726\",1.51,2.97,\"up\"],[\"#13727\",2.63,1.61,\"down\"],[\"#13728\",2.13,1.89,\"down\"],[\"#13729\",1.62,2.62,\"up\"],[\"#13730\",2.28,1.78,\"up\"],[\"#13731\",1.32,4.14,\"down\"],[\"#13732\",2.4,1.72,\"down\"],[\"#13733\",1.26,4.87,\"up\"],[\"#13734\",2.52,1.66,\"down\"],[\"#13735\",2.48,1.68,\"down\"],[\"#13736\",1.32,4.14,\"up\"],[\"#13737\",7.81,1.15,\"down\"],[\"#13738\",1.21,5.86,\"up\"],[\"#13739\",7.5,1.15,\"down\"],[\"#13740\",3.12,1.47,\"down\"],[\"#13741\",1.79,2.27,\"up\"],[\"#13742\",1.25,5.05,\"up\"],[\"#13743\",1.72,2.38,\"down\"],[\"#13744\",4.18,1.31,\"down\"],[\"#13745\",2.62,1.62,\"up\"],[\"#13746\",1.12,9.12,\"up\"],[\"#13747\",1.2,6.09,\"up\"],[\"#13748\",1.8,2.26,\"up\"]]',
    "13749to13798": '[[\"#13749\",2.23,1.81,\"down\"],[\"#13750\",1.31,4.24,\"up\"],[\"#13751\",3.19,1.46,\"down\"],[\"#13752\",1.83,2.21,\"down\"],[\"#13753\",1.57,2.77,\"down\"],[\"#13754\",3.2,1.45,\"down\"],[\"#13755\",5.52,1.22,\"down\"],[\"#13756\",2.33,1.75,\"up\"],[\"#13757\",3.81,1.36,\"up\"],[\"#13758\",1.5,2.98,\"up\"],[\"#13759\",2.32,1.76,\"down\"],[\"#13760\",1.49,3.03,\"up\"],[\"#13761\",2.76,1.57,\"down\"],[\"#13762\",2.24,1.81,\"down\"],[\"#13763\",1.91,2.1,\"up\"],[\"#13764\",2.52,1.66,\"down\"],[\"#13765\",2.02,1.98,\"down\"],[\"#13766\",3.9,1.34,\"down\"],[\"#13767\",2.12,1.89,\"down\"],[\"#13768\",1.83,2.21,\"up\"],[\"#13769\",1.88,2.13,\"up\"],[\"#13770\",1.12,9.37,\"up\"],[\"#13771\",1.66,2.52,\"down\"],[\"#13772\",1.34,3.91,\"up\"],[\"#13773\",1.31,4.23,\"up\"],[\"#13774\",1.36,3.82,\"up\"],[\"#13775\",3.36,1.42,\"down\"],[\"#13776\",7.19,1.16,\"up\"],[\"#13777\",2.52,1.66,\"up\"],[\"#13778\",6.14,1.19,\"up\"],[\"#13779\",4.66,1.27,\"up\"],[\"#13780\",1.22,5.48,\"up\"],[\"#13781\",2.5,1.67,\"down\"],[\"#13782\",5.86,1.21,\"down\"],[\"#13783\",1.53,2.88,\"down\"],[\"#13784\",2.05,1.96,\"down\"],[\"#13785\",8.53,1.13,\"up\"],[\"#13786\",1.2,5.93,\"up\"],[\"#13787\",1.55,2.82,\"up\"],[\"#13788\",1.33,4.03,\"up\"],[\"#13789\",1.15,7.46,\"up\"],[\"#13790\",1.12,9.19,\"down\"],[\"#13791\",1.27,4.65,\"up\"],[\"#13792\",1.28,4.57,\"up\"],[\"#13793\",5.15,1.24,\"up\"],[\"#13794\",1.54,2.85,\"up\"],[\"#13795\",1.1,11.02,\"up\"],[\"#13796\",1.92,2.09,\"up\"],[\"#13797\",2.33,1.75,\"up\"],[\"#13798\",1.15,7.73,\"up\"]]',

}

////////////////////////

var biglogs = [];

for (const ar in archives) {
    biglogs = biglogs.concat(JSON.parse(archives[ar]));
    console.log(ar);
}

////////////////////////

var upx;
var upx1;
var downx;
var downx1;
var winner;
var tag;
var tag1;
var time;

function bigwon() {
    upx = parseFloat(document.getElementsByClassName("swiper-slide")[document.getElementsByClassName("swiper-slide").length - 4].childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].innerHTML.replace(",", ".").replace("x", ""));
    downx = parseFloat(document.getElementsByClassName("swiper-slide")[document.getElementsByClassName("swiper-slide").length - 4].childNodes[0].childNodes[0].childNodes[2].childNodes[2].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].innerHTML.replace(",", ".").replace("x", ""));
    winner = document.getElementsByClassName("swiper-slide")[document.getElementsByClassName("swiper-slide").length - 4].childNodes[0].childNodes[0].childNodes[2].childNodes[1].childNodes[0].childNodes[1].childNodes[0].childNodes[0].getAttribute("color") == "success" ? "up" : "down";

    // console.log(upx)
    // console.log(downx)
    // console.log(winner)

    if ((winner == "up" && upx > downx) || (winner == "down" && upx < downx))
        return true;
    else
        return false;
}

function safering() {

    time = parseInt(document.getElementsByClassName("swiper-slide")[document.getElementsByClassName("swiper-slide").length - 2].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].innerHTML.replace('~', '').replace(':', ''))
    tag = document.getElementsByClassName("swiper-slide")[document.getElementsByClassName("swiper-slide").length - 4].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].innerHTML
    if (time < 525) {

        upx1 = parseFloat(document.getElementsByClassName("swiper-slide")[document.getElementsByClassName("swiper-slide").length - 3].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].innerHTML.replace(",", ".").replace("x", ""));
        downx1 = parseFloat(document.getElementsByClassName("swiper-slide")[document.getElementsByClassName("swiper-slide").length - 3].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[2].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].innerHTML.replace(",", ".").replace("x", ""));
        tag1 = document.getElementsByClassName("swiper-slide")[document.getElementsByClassName("swiper-slide").length - 3].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].innerHTML;

        try { if (bigwon() == true) { console.log(tag1 + ' ' + upx1 + ' ' + downx1, upx1 < downx1 ? "up" : "down"); } } catch (error) {}
        setTimeout(function() { ring(); }, 30000);
    } else {
        setTimeout(function() { ring(); }, 1000);
    }

    try {
        if (bigwon() == true && (time < 530)) {

            var a = new Audio("https://nf1f8200-a.akamaihd.net/downloads/ringtones/files/mp3/twitter-bird-dceb51f6-7561-3a2e-89a2-aad53695e412-53702.mp3");
            a.play();

        }
        console.log(bigwon())
    } catch (error) {

    }
}

function enterup() {
    document.getElementsByClassName("swiper-slide")[document.getElementsByClassName("swiper-slide").length - 3].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[1].click();
    document.getElementsByClassName("swiper-slide")[document.getElementsByClassName("swiper-slide").length - 3].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[4].childNodes[0].click();
    setTimeout(function() { document.getElementsByClassName("swiper-slide")[document.getElementsByClassName("swiper-slide").length - 3].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[5].childNodes[0].click(); }, 500);
}

function enterdown() {
    document.getElementsByClassName("swiper-slide")[document.getElementsByClassName("swiper-slide").length - 3].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[2].click();
    document.getElementsByClassName("swiper-slide")[document.getElementsByClassName("swiper-slide").length - 3].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[4].childNodes[0].click();
    setTimeout(function() { document.getElementsByClassName("swiper-slide")[document.getElementsByClassName("swiper-slide").length - 3].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[5].childNodes[0].click(); }, 500);
}

function lastsecbot() {
    time = parseInt(document.getElementsByClassName("swiper-slide")[document.getElementsByClassName("swiper-slide").length - 2].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].innerHTML.replace('~', '').replace(':', ''))
    var upp = parseFloat(document.getElementsByClassName("swiper-slide")[document.getElementsByClassName("swiper-slide").length - 3].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].innerHTML.replace(",", ".").replace("x", ""));
    var downp = parseFloat(document.getElementsByClassName("swiper-slide")[document.getElementsByClassName("swiper-slide").length - 3].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[2].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].innerHTML.replace(",", ".").replace("x", ""));

    if (time < 520) {

        var a = new Audio("https://nf1f8200-a.akamaihd.net/downloads/ringtones/files/mp3/twitter-bird-dceb51f6-7561-3a2e-89a2-aad53695e412-53702.mp3");
        a.play();

        if (upp > downp) {
            enterdown();
        } else {
            enterup();
        }
        setTimeout(function() { lastsecbot() }, 30000);
    } else {
        console.log(upp + " " + downp);
        setTimeout(function() { lastsecbot(); }, 1000);
    }
}

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

var fma = [];
var a = new Audio("https://nf1f8200-a.akamaihd.net/downloads/ringtones/files/mp3/twitter-bird-dceb51f6-7561-3a2e-89a2-aad53695e412-53702.mp3");
var b = new Audio("https://bucketestrudy.s3.eu-west-3.amazonaws.com/when-604.mp3");

function enter(where, strength) {
    document.getElementsByClassName("swiper-slide")[document.getElementsByClassName("swiper-slide").length - 3].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[where].click();
    document.getElementsByClassName("swiper-slide")[document.getElementsByClassName("swiper-slide").length - 3].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[4].childNodes[strength].click();
    setTimeout(function() { document.getElementsByClassName("swiper-slide")[document.getElementsByClassName("swiper-slide").length - 3].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[5].childNodes[0].click(); }, 500);
}

function autothune() {
    fetch('https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT')
        .then(function(response) {
            return response.json();
        })
        .then(function(r) {
            if (fma.length < 150) {
                fma = Array(150).fill(parseFloat(r.price));
            } else {
                fma.pop();
                fma.unshift(parseFloat(r.price));
            }
            var total = 0;
            for (var i = 0; i < fma.length; i++) {
                total += fma[i];
            }
            var time = parseInt(document.getElementsByClassName("swiper-slide")[document.getElementsByClassName("swiper-slide").length - 2].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].innerHTML.replace('~', '').replace(':', ''))
            var olp = total / fma.length;
            var totalfive = 0;
            for (var i = 0; i < 7; i++) {
                totalfive += fma[i];
            }
            var nlp = totalfive / 7;
            var pct = olp / 100;
            var mpct = 0.0;
            if (olp > nlp)
                mpct = olp - nlp;
            else
                mpct = nlp - olp;
            mpct /= pct;
            if (time < 521) {
                if (mpct > 0.5) {
                    if (olp > nlp)
                        enter(2, 2);
                    else
                        enter(1, 2);
                    a.play();
                } else if (mpct > 0.3) {
                    if (olp > nlp)
                        enter(2, 1);
                    else
                        enter(1, 1);
                    a.play();
                } else if (mpct > 0.25) {
                    if (olp > nlp)
                        enter(2, 0);
                    else
                        enter(1, 0);
                    a.play();
                }
                b.play();
                setTimeout(function() { autothune() }, 60000);
            } else {
                console.log(olp + " " + nlp, olp > nlp ? "down" : "up", mpct + "%");
                setTimeout(function() { autothune(); }, 1000);
            }
        });
}

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

var a = new Audio("https://nf1f8200-a.akamaihd.net/downloads/ringtones/files/mp3/twitter-bird-dceb51f6-7561-3a2e-89a2-aad53695e412-53702.mp3");

function enterup() {
    a.play();
    document.getElementsByClassName("swiper-slide")[document.getElementsByClassName("swiper-slide").length - 3].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[1].click();
    document.getElementsByClassName("swiper-slide")[document.getElementsByClassName("swiper-slide").length - 3].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[4].childNodes[0].click();
    setTimeout(function() { document.getElementsByClassName("swiper-slide")[document.getElementsByClassName("swiper-slide").length - 3].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[5].childNodes[0].click(); }, 500);
}

function enterdown() {
    a.play();
    document.getElementsByClassName("swiper-slide")[document.getElementsByClassName("swiper-slide").length - 3].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[2].click();
    document.getElementsByClassName("swiper-slide")[document.getElementsByClassName("swiper-slide").length - 3].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[4].childNodes[0].click();
    setTimeout(function() { document.getElementsByClassName("swiper-slide")[document.getElementsByClassName("swiper-slide").length - 3].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[5].childNodes[0].click(); }, 500);
}

function lastsecbotup() {
    time = parseInt(document.getElementsByClassName("swiper-slide")[document.getElementsByClassName("swiper-slide").length - 2].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].innerHTML.replace('~', '').replace(':', ''))
    var upp = parseFloat(document.getElementsByClassName("swiper-slide")[document.getElementsByClassName("swiper-slide").length - 3].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].innerHTML.replace(",", ".").replace("x", ""));
    var downp = parseFloat(document.getElementsByClassName("swiper-slide")[document.getElementsByClassName("swiper-slide").length - 3].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[2].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].innerHTML.replace(",", ".").replace("x", ""));

    if (time < 525) {

        if (upp > downp) {
            enterdown();
        } else {
            enterup();
        }
        setTimeout(function() { lastsecbotup() }, 50000);

    } else {
        console.log(upp + " " + downp);
        setTimeout(function() { lastsecbotup(); }, 1000);
    }
}

////////////////////////////////////////////////////////////////

var c1p1;
var c1p1p;
var c1p1w;

function f3(bl) {
    c1p1 = 300;
    c1p1p = 0;
    c1p1w = 0;

    for (let i = 1; i < bl.length; i++) {

        var lptit;
        bl[i - 1][1] < bl[i - 1][2] ? lptit = bl[i - 1][1] : lptit = bl[i - 1][2]
        var lgros;
        bl[i - 1][1] < bl[i - 1][2] ? lgros = bl[i - 1][2] : lgros = bl[i - 1][1]

        var ptit;
        bl[i][1] < bl[i][2] ? ptit = bl[i][1] : ptit = bl[i][2]
        var gros;
        bl[i][1] < bl[i][2] ? gros = bl[i][2] : gros = bl[i][1]

        if ((bl[i - 1][3] == "up" && lptit == bl[i - 1][1]) || (bl[i - 1][3] == "down" && lptit == bl[i - 1][2])) {} else {
            c1p1 -= 30;
            c1p1p += 1;
            if ((bl[i][3] == "up" && ptit == bl[i][1]) || (bl[i][3] == "down" && ptit == bl[i][2])) {
                c1p1 += (30 * ptit);
                c1p1w += 1;
            }
        }
    }
    console.log(c1p1, c1p1w, c1p1p);
}



////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

function cbtime(minePower, price) {
    return ((price + 100) / ((((minePower + 106) / 100) * 1.5) * 1.5))
}

function ratio() {
    var r1 = [];
    var rr1 = [];
    var p = document.getElementById("aaaaa").childNodes;

    for (let i = 0; i < p.length; i++) {
        const element = p[i];
        var m = parseFloat(p[i].childNodes[0].childNodes[6].childNodes[1].textContent) + 106;
        var d = parseFloat(p[i].childNodes[0].childNodes[7].childNodes[0].childNodes[2].innerText.replace("BUSD", '')) + 100;


        var r = m / d;

        p[i].childNodes[0].childNodes[5].childNodes[0].innerHTML += "||" + r.toFixed(3);
        if (r > 0.2) p[i].childNodes[0].childNodes[5].childNodes[0].style.color = "lime"
        r1.push(r);
    }
    p[r1.indexOf(Math.max(...r1))].childNodes[0].childNodes[5].childNodes[0].style.color = "cyan"
    return r1;
}

var maxpage = parseInt(document.getElementsByClassName("ly-page vertical-children user-select-none")[0].childNodes[3].textContent.replace(" ", "").replace("/", ""))
var nextpagebtn = document.getElementsByClassName("ly-page vertical-children user-select-none")[0].childNodes[5]
var r2 = [];

function ratiall() {
    r2.push(...ratio());
    nextpagebtn.click();
    var page = parseInt(document.getElementsByClassName("ly-page vertical-children user-select-none")[0].childNodes[2].value)
    if (page < maxpage) setTimeout(ratiall, 2000);
}

ratiall();

setTimeout(() => {
    console.log(Math.max(...r2));
    console.log(parseInt((r2.indexOf(Math.max(...r2)) / 15) + 1));
}, 2000 * maxpage);

function aprerdaytoyear(year) {

}

function apreryeartoday(day) {
    var hold = day;
    for (let i = 0; i < 360; i++) {
        hold *= day;
    }
    return hold;
}


function scrapmomo(mboxprice, mboxper100hashrate) {
    fetch('https://nftapi.bitsplus.cn/auction/search/BNB?page=1&limit=10000&category=&vType=&sort=price&pType=').then(function(response) {
        return response.json();
    }).then(function(r) {
        r = r.list

        var fams = {}
        var rares = []

        for (let i = 0; i < r.length; i++) {
            r[i].nowPrice /= 1000000000;
            if (('' + r[i].prototype)[0] == 4) rares.push(r[i]);
            if (fams.hasOwnProperty(r[i].prototype.toString().slice(1)) == false) fams[r[i].prototype.toString().slice(1)] = [];
            if (fams[r[i].prototype.toString().slice(1)][('' + r[i].prototype)[0]] === undefined) fams[r[i].prototype.toString().slice(1)][('' + r[i].prototype)[0]] = [];
            fams[r[i].prototype.toString().slice(1)][('' + r[i].prototype)[0]].push(r[i])
        }

        for (const f in fams) {
            if (fams[f][1] === undefined || fams[f][2] === undefined || fams[f][3] === undefined || fams[f][4] === undefined)
                delete fams[f]
        }

        for (let i = 0; i < rares.length; i++) {
            if (fams.hasOwnProperty(rares[i].prototype.toString().slice(1)) == false) {
                rares.splice(i, 1);
                i--;
            } else {
                rares[i].fullnowPrice = rares[i].nowPrice + fams[rares[i].prototype.toString().slice(1)][1][0].nowPrice + fams[rares[i].prototype.toString().slice(1)][2][0].nowPrice + fams[rares[i].prototype.toString().slice(1)][3][0].nowPrice;
                rares[i].fullpower = rares[i].hashrate + 306;
                rares[i].worth = rares[i].fullpower / rares[i].fullnowPrice;
                rares[i].daily = (((rares[i].fullpower / 100) * mboxper100hashrate) * mboxprice)
                rares[i].renta = rares[i].fullnowPrice / rares[i].daily
            }
        }

        rares.sort((a, b) => {
            if (a.worth > b.worth)
                return -1;
            if (a.worth < b.worth)
                return 1;
            return 0;
        })

        console.log(rares);

    });
}
scrapmomo(9, 1.2);

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

function scrapzoogame(zooprice, zooper100hashrate, alreadygot) {

    fetch('https://api.zoogame.finance/api/zoo/market?nftName=&team=&rarity=&page=1&perPage=10000&type=1&currentPage=1').then(function(response) {
        return response.json();
    }).then(function(r) {

        var multi = [];
        var solo = [];

        for (let i = 0; i < r.data.length; i++) {
            if (r.data[i].nfts.length > 1)
                multi.push(r.data[i]);
            else
                solo.push(r.data[i]);
        }

        solo = solo.filter(z => alreadygot.indexOf(z.team) == -1);

        var fams = {}
        var epics = [];

        for (let i = 0; i < solo.length; i++) {
            if (fams.hasOwnProperty(solo[i].team) == false) fams[solo[i].team] = {};
            if (fams[solo[i].team].hasOwnProperty(solo[i].rarity) == false) fams[solo[i].team][solo[i].rarity] = [];
            if (solo[i].rarity == "Epic") epics.push(solo[i]);
            solo[i].price /= 1000000000000000000;
            fams[solo[i].team][solo[i].rarity].push(solo[i])
        }

        for (const f in fams) {
            if (fams[f].hasOwnProperty("Junk") == false || fams[f].hasOwnProperty("Normal") == false || fams[f].hasOwnProperty("Rare") == false || fams[f].hasOwnProperty("Epic") == false) {
                delete fams[f];
            } else {
                for (const q in fams[f]) {
                    fams[f][q].sort((a, b) => {
                        if (a.price > b.price)
                            return 1;
                        if (a.price < b.price)
                            return -1;
                        return 0;
                    })
                }
            }
        }

        for (let i = 0; i < epics.length; i++) {
            if (fams.hasOwnProperty(epics[i].team) == false) {
                epics.splice(i, 1);
                i--;
            } else {
                epics[i].fullprice = epics[i].price + fams[epics[i].team].Junk[0].price + fams[epics[i].team].Normal[0].price + fams[epics[i].team].Rare[0].price;
                epics[i].fullpower = epics[i].power + 57;
                epics[i].worth = epics[i].fullpower / epics[i].fullprice;
                epics[i].journa = (((epics[i].fullpower / 100) * zooper100hashrate) * zooprice)
                epics[i].renta = epics[i].fullprice / epics[i].journa
            }
        }

        epics.sort((a, b) => {
            if (a.worth > b.worth)
                return -1;
            if (a.worth < b.worth)
                return 1;
            return 0;
        })

        console.log(epics);

    })
}
scrapzoogame(1.47, 14, ["Pelicans", "Nuggets", "Tom & Jerry", "King Kong", "Doggy", "Heavy Weight", "Akita", "Ice Age"]);

/////////////////////////////

function journa(journapar100momo, journapar100zoo, minemomo, minezoo, bpjour, key) {

    var myHeaders = new Headers();
    myHeaders.append("X-CMC_PRO_API_KEY", key);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?convert=USD&start=100&limit=5000", requestOptions).then(function(response) {
        return response.json();
    }).then(function(r) {
        var mbox = r.data.find(element => element.id == 9175)
        var zoo = r.data.find(element => element.id == 11020)
        var bp = r.data.find(element => element.id == 10904)
        var j = 0;
        var jmbox = 0;
        var jzoo = 0;
        var jbp = 0;
        jmbox += (mbox.quote.USD.price * ((minemomo / 100) * journapar100momo));
        jzoo += (zoo.quote.USD.price * ((minezoo / 100) * journapar100zoo));
        jbp += (bp.quote.USD.price * bpjour);
        j += jmbox + jzoo + jbp;
        console.log("mbox", mbox.quote.USD.price, jmbox);
        console.log("zoo", zoo.quote.USD.price, jzoo);
        console.log("bp", bp.quote.USD.price, jbp);
        console.log(j);
    })

}

journa();

//////////////////

function zooKeyWorth() {
    var keyworth = 0;

    function postfetch(d, ratio) {
        d = d.data[0];
        d.price /= 1000000000000000000;
        console.log(d.price, ratio, d.price * ratio)
        return (d.price * ratio);
    }

    fetch('https://api2.zoogame.finance/api/zoo/market?price=asc&page=1&perPage=1&currentPage=1&rarity=junk').then(function(response) {
        return response.json();
    }).then(function(r) {
        console.log(r);
        keyworth += postfetch(r, 54.94)
    })
    fetch('https://api2.zoogame.finance/api/zoo/market?price=asc&page=1&perPage=1&currentPage=1&rarity=normal').then(function(response) {
        return response.json();
    }).then(function(r) {
        keyworth += postfetch(r, 27.47)
    })
    fetch('https://api2.zoogame.finance/api/zoo/market?price=asc&page=1&perPage=1&currentPage=1&rarity=rare').then(function(response) {
        return response.json();
    }).then(function(r) {
        keyworth += postfetch(r, 13.73)
    })
    fetch('https://api2.zoogame.finance/api/zoo/market?price=asc&page=1&perPage=1&currentPage=1&rarity=epic').then(function(response) {
        return response.json();
    }).then(function(r) {
        keyworth += postfetch(r, 3.43)
    })
    fetch('https://api2.zoogame.finance/api/zoo/market?price=asc&page=1&perPage=1&currentPage=1&rarity=legendary').then(function(response) {
        return response.json();
    }).then(function(r) {
        keyworth += postfetch(r, 0.43)
    })
    setTimeout(function() { console.log(keyworth / 100 + "$"); }, 5000)
}

zooKeyWorth();


/////////////////////////////////////////

function moboxKeyWorth() {
    var keyworth = 0;

    function postfetch(d, ratio) {
        d = d.list[0];
        d.endPrice /= 1000000000;
        console.log(d.endPrice, ratio, d.endPrice * ratio);
        return (d.endPrice * ratio);
    }

    fetch('https://nftapi.bitsplus.cn/auction/search/BNB?page=1&limit=1&category=&sort=price&pType=&vType=1').then(function(response) {
        return response.json();
    }).then(function(r) {
        keyworth += postfetch(r, 50)
    })
    fetch('https://nftapi.bitsplus.cn/auction/search/BNB?page=1&limit=1&category=&sort=price&pType=&vType=2').then(function(response) {
        return response.json();
    }).then(function(r) {
        keyworth += postfetch(r, 35)
    })
    fetch('https://nftapi.bitsplus.cn/auction/search/BNB?page=1&limit=1&category=&sort=price&pType=&vType=3').then(function(response) {
        return response.json();
    }).then(function(r) {
        keyworth += postfetch(r, 12)
    })
    fetch('https://nftapi.bitsplus.cn/auction/search/BNB?page=1&limit=1&category=&sort=price&pType=&vType=4').then(function(response) {
        return response.json();
    }).then(function(r) {
        keyworth += postfetch(r, 2.5)
    })
    fetch('https://nftapi.bitsplus.cn/auction/search/BNB?page=1&limit=1&category=&sort=price&pType=&vType=5').then(function(response) {
        return response.json();
    }).then(function(r) {
        keyworth += postfetch(r, 0.5)
    })
    setTimeout(function() { console.log(keyworth / 100 + "$"); }, 5000)
}

moboxKeyWorth();