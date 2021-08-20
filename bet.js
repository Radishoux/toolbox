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


function scrapmomo() {
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
                rares[i].journa = (((rares[i].fullpower / 100) * 1.2) * 4.4)
                rares[i].renta = rares[i].fullnowPrice / rares[i].journa
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
scrapmomo();

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

function scrapzoogame() {

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
                epics[i].journa = (((epics[i].fullpower / 100) * 30) * 0.55)
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
scrapzoogame();

//////////////////

var names = { "Name_1": "Tweets", "Name_2": "Tweetser", "Name_3": "Violie Featherstone", "Name_4": "Violet Radar Feastherstone", "Name_5": "Chuckie woodbird", "Name_6": "Chuck Woodbird", "Name_7": "Rickie Red flapperitto", "Name_8": "Enrique flapperitto", "Name_9": "Snowie flyer", "Name_10": "Sir Snowington flyer", "Name_11": "Bluey featherington", "Name_12": "Bluesette featherington", "Name_13": "Rave darkbird", "Name_14": "Dark Raven Darkbird", "Name_15": "Lei Lei Hawaiian-blue", "Name_16": "Leilani Hawaiian blue hula", "Name_17": "Mini Victory bluebird", "Name_18": "Vicktorious the bluebird", "Name_19": "Roosty Dood", "Name_20": "Rooster Doodle - Doo", "Name_21": "Quack", "Name_22": "Quackers", "Name_23": "Toco Little Bill", "Name_24": "Señor Toco Big Bill", "Name_25": "Squawk", "Name_26": "Squawker King", "Name_27": "Flamingy Flamingos", "Name_28": "Flaminglatina Flamingos", "Name_29": "Chilly la Penguino", "Name_30": "Chillington la Penguino", "Name_31": "Fishie Sgull", "Name_32": "S. Gull Fisher", "Name_33": "Iggy pingi", "Name_34": "Igloo penguinton", "Name_35": "Hoot", "Name_36": "Senior Hootsalot", "Name_37": "Yah-Yah Purplebeaker", "Name_38": "Yahman Purplebeaker Snr", "Name_39": "Nini White-birdie", "Name_40": "Nursey Ninette White-bird", "Name_41": "Oinkie", "Name_42": "Captain Oinksly", "Name_43": "Alas Alligator", "Name_44": "Conrad Alastor Aligator", "Name_45": "Ango the calf", "Name_46": "Sheriff Angus The Cow", "Name_47": "Pippo", "Name_48": "Pippo Potamus", "Name_49": "Feli foxy", "Name_50": "Felix Fielder", "Name_51": "Pigsly", "Name_52": "Chef P.I.G", "Name_53": "Cup Panda Poh", "Name_54": "Snr Panda Poh Poh", "Name_55": "Frankie", "Name_56": "Sir Franklin", "Name_57": "Butty the Goat", "Name_58": "Butterlina the Goatina", "Name_59": "Baby Nana", "Name_60": "Bananko", "Name_61": "Baby Elly elephant", "Name_62": "Senior Ellyhandro Elephant", "Name_63": "Raccoon Rocky", "Name_64": "Racoon Rocket Rick", "Name_65": "Cub Pooky", "Name_66": "Polar Pook", "Name_67": "Rhinny", "Name_68": "Sir Rhinoceros", "Name_69": "Tye Tiger", "Name_70": "Tymber Tiger", "Name_71": "Leo", "Name_72": "King Leonardo", "Name_73": "Daisy", "Name_74": "Daisobells", "Name_75": "Carry the bunny", "Name_76": "Carrot the Rabbit", "Name_77": "Huggsly the Koala", "Name_78": "Mrs Koala Huggington", "Name_79": "Meowlin", "Name_80": "Monsieur Meowsley", "Name_81": "Blub", "Name_82": "Blubber", "Name_83": "Chompy", "Name_84": "Long John Chompster", "Name_85": "Sting", "Name_86": "Sir Stingabold", "Name_87": "Reefling", "Name_88": "Reef Dude", "Name_89": "Sealee", "Name_90": "Admiral Sea Lion", "Name_91": "Poppy fisher", "Name_92": "Mrs Poppingly Fisher", "Name_93": "Barny sea", "Name_94": "Barnicle-Beau Sea", "Name_95": "Finley jnr fish", "Name_96": "Fin midfielder", "Name_97": "Bubba Phish", "Name_98": "Madam Bubbles Phish", "Name_99": "Aqua Marine", "Name_100": "Aquavion Marine", "Name_101": "Jabber", "Name_102": "jabberjaws", "Name_103": "Bree", "Name_104": "Breezer", "Name_105": "Puff", "Name_106": "Chef Puffadore", "Name_107": "Sunny", "Name_108": "Sunny Ray", "Name_109": "Pop", "Name_110": "El Capitan popitto", "Name_111": "Spike", "Name_112": "Spikester", "Name_113": "Flop", "Name_114": "Flopper", "Name_115": "Lil Red", "Name_116": "Sheriff Red", "Name_117": "Prissette", "Name_118": "Mrs Prissy", "Name_119": "Lemmy", "Name_120": "Officer Lemo", "Name_121": "Demmie", "Name_122": "Demon Dave", "Name_123": "Frankie Stein", "Name_124": "Frankster Stein", "Name_125": "Stubby", "Name_126": "Stubsly Sam", "Name_127": "Pokey", "Name_128": "Pokentine", "Name_129": "Fry", "Name_130": "Frightenator", "Name_131": "Bao", "Name_132": "Bao Wao", "Name_133": "Buttons", "Name_134": "Buttondeous", "Name_135": "Gazey", "Name_136": "Gazettino", "Name_137": "Peep", "Name_138": "Peepasour", "Name_139": "Rompy", "Name_140": "Rompastomp", "Name_141": "Jacko Junior", "Name_142": "Jacko Senior", "Name_143": "Sprout", "Name_144": "Sproutinator", "Name_145": "Geegee", "Name_146": "Geezopo", "Name_147": "Leefatine", "Name_148": "Leefalicious", "Name_149": "Crump", "Name_150": "Crumpatore", "Name_151": "Kiki", "Name_152": "Kikatoro", "Name_153": "Merly", "Name_154": "Merlin the Great", "Name_155": "Cray", "Name_156": "Crayzor", "Name_157": "Mini fangs", "Name_158": "Fangs", "Name_159": "Mini loon", "Name_160": "loony Loolinda", "Name_161": "Baller Benny", "Name_162": "Scorer Sam", "Name_163": "Footballer Fernando", "Name_164": "Goalie Gordo", "Name_165": "Sarg Simon", "Name_166": "Surgeon Smith", "Name_167": "Rough house Ronnie", "Name_168": "Bandit Bob", "Name_169": "Judge joe", "Name_170": "Fireman Phill", "Name_171": "Officer Oli", "Name_172": "Agent Adam", "Name_173": "Flight attendant Aniba", "Name_174": "Sensei Haruto", "Name_175": "Geisha Akari", "Name_176": "Sumo suromoto", "Name_177": "Sultan Soloman", "Name_178": "Miner Mike", "Name_179": "Gaurd Garry", "Name_180": "Pilot Parker", "Name_181": "Private Investigator Seymour", "Name_182": "Captain Carl", "Name_183": "Rumble Ronny", "Name_184": "Conductor Charles", "Name_185": "Indian Tribal Chief", "Name_186": "Moon Landing Astronaut", "Name_187": "Inspector Boris", "Name_188": "Tajij Tandoori", "Name_189": "Fighter Fahad", "Name_190": "Cleric Cas", "Name_191": "Red Rottodore", "Name_192": "Felinia", "Name_193": "Red Tyrant", "Name_194": "Masked Max", "Name_195": "Bolzore", "Name_196": "Klank", "Name_197": "Kelpa", "Name_198": "Flame", "Name_199": "Stomper", "Name_200": "Claw", "Name_201": "Hooded Harry", "Name_202": "Red pepper", "Name_203": "Nights gaurd", "Name_204": "Circulator", "Name_205": "Nurse Hart", "Name_206": "Phone operator Olivia", "Name_207": "Midfielder Axel", "Name_208": "Thor", "Name_209": "Aviator Storm", "Name_210": "Chef Claude", "Name_211": "Incendio the Great Magician", "Name_212": "Bozo the Clown", "Name_213": "Pilot Chuck", "Name_214": "Cowboy Cassidy", "Name_215": "Cycler Nick", "Name_216": "Survivalist Stan", "Name_217": "Captain Ace", "Name_218": "Fedora Filipo", "Name_219": "Builder Bennet", "Name_220": "Patriot Patrick", "Name_221": "Graduate Graham", "Name_222": "Eye Patch Fred", "Name_223": "Madam Carmila dubois", "Name_224": "Kindergarten Kim", "Name_225": "Rebel Roy", "Name_226": "Bully Brandon", "Name_227": "Sheikh Khalil", "Name_228": "Ranger Rickster", "Name_229": "Safari Scott", "Name_230": "Purple Kin-evil", "Name_231": "Bumblebee", "Name_232": "Jedi", "Name_233": "Stealman", "Name_234": "The Green Jabber", "Name_235": "Mega Man", "Name_236": "Rock\'em", "Name_237": "Red Ravoneer", "Name_238": "Dark zoom", "Name_239": "Flamorissa", "Name_240": "Robo Guy", "Name_241": "Bobo Banana-Bot", "Name_242": "Danny Dapporovsky", "Name_243": "CoinMarketCap Robot", "Name_244": "Loda Team Alliance", "Name_245": "Goldorian Smart Chainadore", "Name_246": "Bino Binancian Bot", "Name_247": "Bird face", "Name_248": "Bird bird face", "Name_249": "Blue bird", "Name_250": "Blue bird bonnet", "Name_251": "Red dotty bird", "Name_252": "Pirate bird red dottingon", "Name_253": "Brownie birdster", "Name_254": "Sir brownster bird", "Name_255": "Blue ring birdie", "Name_256": "Detective Blue Ring", "Name_257": "Yellow gobble", "Name_258": "Señor Yellow Gob", "Name_259": "Stripes singer", "Name_260": "Stripes S Smiles", "Name_261": "Ferny Feathers", "Name_262": "Mrs. Fernacia Feathers", "Name_263": "Tangelo pecko", "Name_264": "Queen Tangelo of Peckington", "Name_265": "Gingie tweet", "Name_266": "Ginger Tee Tweet", "Name_267": "Platty bill", "Name_268": "Pete Platypus", "Name_269": "Antsie Pants", "Name_270": "Ant E. Ater", "Name_271": "Sandy Sloth", "Name_272": "Sleepster Sando Sloth", "Name_273": "Chee Chee Cheater", "Name_274": "Chee Champion Cheater", "Name_275": "Scaly Pango", "Name_276": "Scales tunneler", "Name_277": "Gee Gee Giraffe", "Name_278": "Gee Raff Munchallot", "Name_279": "Nutsy Squirrelster", "Name_280": "Nutter S Quirrel", "Name_281": "Squeaky", "Name_282": "Stylish Squeaks", "Name_283": "Puppster", "Name_284": "Punk Pup", "Name_285": "Prickly H.Hog", "Name_286": "Prickles Hedgehog", "Name_287": "Metally Mo Fish", "Name_288": "Metalico-Mo Fisher", "Name_289": "Octo", "Name_290": "Chef Octo-san", "Name_291": "Jojo Jelly", "Name_292": "Jolinda Jellifisher", "Name_293": "lil battish fisher", "Name_294": "Bat-fisher", "Name_295": "Toot fishie", "Name_296": "Tootser Lucky Fisher", "Name_297": "Reddy finner", "Name_298": "Red Green Cap Finner", "Name_299": "Spotty Seaford", "Name_300": "Senior Spot Seaford", "Name_301": "Reddie fin", "Name_302": "Rancher Red Fin", "Name_303": "Puck Finley", "Name_304": "Puckerlina Finley", "Name_305": "Bob Reggs", "Name_306": "Reggae Marley", "Name_307": "Green sprouts", "Name_308": "Mean Sprout", "Name_309": "Minnie Meow", "Name_310": "Monster Meow", "Name_311": "Dribbles", "Name_312": "Dribble Sundae", "Name_313": "Purpie Popper", "Name_314": "Popping Purple Prankster", "Name_315": "Platto", "Name_316": "King Platosaur", "Name_317": "Sunray Dragon", "Name_318": "Sunbeam Flammin Dragor", "Name_319": "Puffy Dragor", "Name_320": "Puff Flapper Dragonster", "Name_321": "Greenie Meanie", "Name_322": "The Green Beast", "Name_323": "Pinkie", "Name_324": "Pink The Spikes", "Name_325": "Choppy", "Name_326": "Chopper" }

var ffff = { 11001: { prototype: 11001, tokenName: "Name_1", img: "1111", quality: 1, category: 1, mmNum: 0 }, 21001: { prototype: 21001, tokenName: "Name_1", img: "1111", quality: 2, category: 1, mmNum: 0 }, 31001: { prototype: 31001, tokenName: "Name_1", img: "1111", quality: 3, category: 1, mmNum: 0 }, 41001: { prototype: 41001, tokenName: "Name_2", img: "1111", quality: 4, category: 1, mmNum: 200 }, 11002: { prototype: 11002, tokenName: "Name_3", img: "1111", quality: 1, category: 1, mmNum: 0 }, 21002: { prototype: 21002, tokenName: "Name_3", img: "1111", quality: 2, category: 1, mmNum: 0 }, 31002: { prototype: 31002, tokenName: "Name_3", img: "1111", quality: 3, category: 1, mmNum: 0 }, 41002: { prototype: 41002, tokenName: "Name_4", img: "1111", quality: 4, category: 1, mmNum: 200 }, 11003: { prototype: 11003, tokenName: "Name_5", img: "1111", quality: 1, category: 1, mmNum: 0 }, 21003: { prototype: 21003, tokenName: "Name_5", img: "1111", quality: 2, category: 1, mmNum: 0 }, 31003: { prototype: 31003, tokenName: "Name_5", img: "1111", quality: 3, category: 1, mmNum: 0 }, 41003: { prototype: 41003, tokenName: "Name_6", img: "1111", quality: 4, category: 1, mmNum: 200 }, 11004: { prototype: 11004, tokenName: "Name_7", img: "1111", quality: 1, category: 1, mmNum: 0 }, 21004: { prototype: 21004, tokenName: "Name_7", img: "1111", quality: 2, category: 1, mmNum: 0 }, 31004: { prototype: 31004, tokenName: "Name_7", img: "1111", quality: 3, category: 1, mmNum: 0 }, 41004: { prototype: 41004, tokenName: "Name_8", img: "1111", quality: 4, category: 1, mmNum: 200 }, 11005: { prototype: 11005, tokenName: "Name_9", img: "1111", quality: 1, category: 1, mmNum: 0 }, 21005: { prototype: 21005, tokenName: "Name_9", img: "1111", quality: 2, category: 1, mmNum: 0 }, 31005: { prototype: 31005, tokenName: "Name_9", img: "1111", quality: 3, category: 1, mmNum: 0 }, 41005: { prototype: 41005, tokenName: "Name_10", img: "1111", quality: 4, category: 1, mmNum: 200 }, 11006: { prototype: 11006, tokenName: "Name_11", img: "1111", quality: 1, category: 1, mmNum: 0 }, 21006: { prototype: 21006, tokenName: "Name_11", img: "1111", quality: 2, category: 1, mmNum: 0 }, 31006: { prototype: 31006, tokenName: "Name_11", img: "1111", quality: 3, category: 1, mmNum: 0 }, 41006: { prototype: 41006, tokenName: "Name_12", img: "1111", quality: 4, category: 1, mmNum: 200 }, 11007: { prototype: 11007, tokenName: "Name_13", img: "1111", quality: 1, category: 1, mmNum: 0 }, 21007: { prototype: 21007, tokenName: "Name_13", img: "1111", quality: 2, category: 1, mmNum: 0 }, 31007: { prototype: 31007, tokenName: "Name_13", img: "1111", quality: 3, category: 1, mmNum: 0 }, 41007: { prototype: 41007, tokenName: "Name_14", img: "1111", quality: 4, category: 1, mmNum: 200 }, 11008: { prototype: 11008, tokenName: "Name_15", img: "1111", quality: 1, category: 1, mmNum: 0 }, 21008: { prototype: 21008, tokenName: "Name_15", img: "1111", quality: 2, category: 1, mmNum: 0 }, 31008: { prototype: 31008, tokenName: "Name_15", img: "1111", quality: 3, category: 1, mmNum: 0 }, 41008: { prototype: 41008, tokenName: "Name_16", img: "1111", quality: 4, category: 1, mmNum: 200 }, 11009: { prototype: 11009, tokenName: "Name_17", img: "1111", quality: 1, category: 1, mmNum: 0 }, 21009: { prototype: 21009, tokenName: "Name_17", img: "1111", quality: 2, category: 1, mmNum: 0 }, 31009: { prototype: 31009, tokenName: "Name_17", img: "1111", quality: 3, category: 1, mmNum: 0 }, 41009: { prototype: 41009, tokenName: "Name_18", img: "1111", quality: 4, category: 1, mmNum: 200 }, 11010: { prototype: 11010, tokenName: "Name_19", img: "1111", quality: 1, category: 1, mmNum: 0 }, 21010: { prototype: 21010, tokenName: "Name_19", img: "1111", quality: 2, category: 1, mmNum: 0 }, 31010: { prototype: 31010, tokenName: "Name_19", img: "1111", quality: 3, category: 1, mmNum: 0 }, 41010: { prototype: 41010, tokenName: "Name_20", img: "1111", quality: 4, category: 1, mmNum: 200 }, 11011: { prototype: 11011, tokenName: "Name_21", img: "1111", quality: 1, category: 1, mmNum: 0 }, 21011: { prototype: 21011, tokenName: "Name_21", img: "1111", quality: 2, category: 1, mmNum: 0 }, 31011: { prototype: 31011, tokenName: "Name_21", img: "1111", quality: 3, category: 1, mmNum: 0 }, 41011: { prototype: 41011, tokenName: "Name_22", img: "1111", quality: 4, category: 1, mmNum: 200 }, 11012: { prototype: 11012, tokenName: "Name_23", img: "1111", quality: 1, category: 1, mmNum: 0 }, 21012: { prototype: 21012, tokenName: "Name_23", img: "1111", quality: 2, category: 1, mmNum: 0 }, 31012: { prototype: 31012, tokenName: "Name_23", img: "1111", quality: 3, category: 1, mmNum: 0 }, 41012: { prototype: 41012, tokenName: "Name_24", img: "1111", quality: 4, category: 1, mmNum: 200 }, 11013: { prototype: 11013, tokenName: "Name_25", img: "1111", quality: 1, category: 1, mmNum: 0 }, 21013: { prototype: 21013, tokenName: "Name_25", img: "1111", quality: 2, category: 1, mmNum: 0 }, 31013: { prototype: 31013, tokenName: "Name_25", img: "1111", quality: 3, category: 1, mmNum: 0 }, 41013: { prototype: 41013, tokenName: "Name_26", img: "1111", quality: 4, category: 1, mmNum: 200 }, 11014: { prototype: 11014, tokenName: "Name_27", img: "1111", quality: 1, category: 1, mmNum: 0 }, 21014: { prototype: 21014, tokenName: "Name_27", img: "1111", quality: 2, category: 1, mmNum: 0 }, 31014: { prototype: 31014, tokenName: "Name_27", img: "1111", quality: 3, category: 1, mmNum: 0 }, 41014: { prototype: 41014, tokenName: "Name_28", img: "1111", quality: 4, category: 1, mmNum: 200 }, 11015: { prototype: 11015, tokenName: "Name_29", img: "1111", quality: 1, category: 1, mmNum: 0 }, 21015: { prototype: 21015, tokenName: "Name_29", img: "1111", quality: 2, category: 1, mmNum: 0 }, 31015: { prototype: 31015, tokenName: "Name_29", img: "1111", quality: 3, category: 1, mmNum: 0 }, 41015: { prototype: 41015, tokenName: "Name_30", img: "1111", quality: 4, category: 1, mmNum: 200 }, 11016: { prototype: 11016, tokenName: "Name_31", img: "1111", quality: 1, category: 1, mmNum: 0 }, 21016: { prototype: 21016, tokenName: "Name_31", img: "1111", quality: 2, category: 1, mmNum: 0 }, 31016: { prototype: 31016, tokenName: "Name_31", img: "1111", quality: 3, category: 1, mmNum: 0 }, 41016: { prototype: 41016, tokenName: "Name_32", img: "1111", quality: 4, category: 1, mmNum: 200 }, 11017: { prototype: 11017, tokenName: "Name_33", img: "1111", quality: 1, category: 1, mmNum: 0 }, 21017: { prototype: 21017, tokenName: "Name_33", img: "1111", quality: 2, category: 1, mmNum: 0 }, 31017: { prototype: 31017, tokenName: "Name_33", img: "1111", quality: 3, category: 1, mmNum: 0 }, 41017: { prototype: 41017, tokenName: "Name_34", img: "1111", quality: 4, category: 1, mmNum: 200 }, 11018: { prototype: 11018, tokenName: "Name_35", img: "1111", quality: 1, category: 1, mmNum: 0 }, 21018: { prototype: 21018, tokenName: "Name_35", img: "1111", quality: 2, category: 1, mmNum: 0 }, 31018: { prototype: 31018, tokenName: "Name_35", img: "1111", quality: 3, category: 1, mmNum: 0 }, 41018: { prototype: 41018, tokenName: "Name_36", img: "1111", quality: 4, category: 1, mmNum: 200 }, 11019: { prototype: 11019, tokenName: "Name_37", img: "1111", quality: 1, category: 1, mmNum: 0 }, 21019: { prototype: 21019, tokenName: "Name_37", img: "1111", quality: 2, category: 1, mmNum: 0 }, 31019: { prototype: 31019, tokenName: "Name_37", img: "1111", quality: 3, category: 1, mmNum: 0 }, 41019: { prototype: 41019, tokenName: "Name_38", img: "1111", quality: 4, category: 1, mmNum: 200 }, 11020: { prototype: 11020, tokenName: "Name_39", img: "1111", quality: 1, category: 1, mmNum: 0 }, 21020: { prototype: 21020, tokenName: "Name_39", img: "1111", quality: 2, category: 1, mmNum: 0 }, 31020: { prototype: 31020, tokenName: "Name_39", img: "1111", quality: 3, category: 1, mmNum: 0 }, 41020: { prototype: 41020, tokenName: "Name_40", img: "1111", quality: 4, category: 1, mmNum: 200 }, 11021: { prototype: 11021, tokenName: "Name_247", img: "1111", quality: 1, category: 1, mmNum: 0 }, 21021: { prototype: 21021, tokenName: "Name_247", img: "1111", quality: 2, category: 1, mmNum: 0 }, 31021: { prototype: 31021, tokenName: "Name_247", img: "1111", quality: 3, category: 1, mmNum: 0 }, 41021: { prototype: 41021, tokenName: "Name_248", img: "1111", quality: 4, category: 1, mmNum: 200 }, 11022: { prototype: 11022, tokenName: "Name_249", img: "1111", quality: 1, category: 1, mmNum: 0 }, 21022: { prototype: 21022, tokenName: "Name_249", img: "1111", quality: 2, category: 1, mmNum: 0 }, 31022: { prototype: 31022, tokenName: "Name_249", img: "1111", quality: 3, category: 1, mmNum: 0 }, 41022: { prototype: 41022, tokenName: "Name_250", img: "1111", quality: 4, category: 1, mmNum: 200 }, 11023: { prototype: 11023, tokenName: "Name_251", img: "1111", quality: 1, category: 1, mmNum: 0 }, 21023: { prototype: 21023, tokenName: "Name_251", img: "1111", quality: 2, category: 1, mmNum: 0 }, 31023: { prototype: 31023, tokenName: "Name_251", img: "1111", quality: 3, category: 1, mmNum: 0 }, 41023: { prototype: 41023, tokenName: "Name_252", img: "1111", quality: 4, category: 1, mmNum: 200 }, 11024: { prototype: 11024, tokenName: "Name_253", img: "1111", quality: 1, category: 1, mmNum: 0 }, 21024: { prototype: 21024, tokenName: "Name_253", img: "1111", quality: 2, category: 1, mmNum: 0 }, 31024: { prototype: 31024, tokenName: "Name_253", img: "1111", quality: 3, category: 1, mmNum: 0 }, 41024: { prototype: 41024, tokenName: "Name_254", img: "1111", quality: 4, category: 1, mmNum: 200 }, 11025: { prototype: 11025, tokenName: "Name_255", img: "1111", quality: 1, category: 1, mmNum: 0 }, 21025: { prototype: 21025, tokenName: "Name_255", img: "1111", quality: 2, category: 1, mmNum: 0 }, 31025: { prototype: 31025, tokenName: "Name_255", img: "1111", quality: 3, category: 1, mmNum: 0 }, 41025: { prototype: 41025, tokenName: "Name_256", img: "1111", quality: 4, category: 1, mmNum: 200 }, 11026: { prototype: 11026, tokenName: "Name_257", img: "1111", quality: 1, category: 1, mmNum: 0 }, 21026: { prototype: 21026, tokenName: "Name_257", img: "1111", quality: 2, category: 1, mmNum: 0 }, 31026: { prototype: 31026, tokenName: "Name_257", img: "1111", quality: 3, category: 1, mmNum: 0 }, 41026: { prototype: 41026, tokenName: "Name_258", img: "1111", quality: 4, category: 1, mmNum: 200 }, 11027: { prototype: 11027, tokenName: "Name_259", img: "1111", quality: 1, category: 1, mmNum: 0 }, 21027: { prototype: 21027, tokenName: "Name_259", img: "1111", quality: 2, category: 1, mmNum: 0 }, 31027: { prototype: 31027, tokenName: "Name_259", img: "1111", quality: 3, category: 1, mmNum: 0 }, 41027: { prototype: 41027, tokenName: "Name_260", img: "1111", quality: 4, category: 1, mmNum: 200 }, 11028: { prototype: 11028, tokenName: "Name_261", img: "1111", quality: 1, category: 1, mmNum: 0 }, 21028: { prototype: 21028, tokenName: "Name_261", img: "1111", quality: 2, category: 1, mmNum: 0 }, 31028: { prototype: 31028, tokenName: "Name_261", img: "1111", quality: 3, category: 1, mmNum: 0 }, 41028: { prototype: 41028, tokenName: "Name_262", img: "1111", quality: 4, category: 1, mmNum: 200 }, 11029: { prototype: 11029, tokenName: "Name_263", img: "1111", quality: 1, category: 1, mmNum: 0 }, 21029: { prototype: 21029, tokenName: "Name_263", img: "1111", quality: 2, category: 1, mmNum: 0 }, 31029: { prototype: 31029, tokenName: "Name_263", img: "1111", quality: 3, category: 1, mmNum: 0 }, 41029: { prototype: 41029, tokenName: "Name_264", img: "1111", quality: 4, category: 1, mmNum: 200 }, 11030: { prototype: 11030, tokenName: "Name_265", img: "1111", quality: 1, category: 1, mmNum: 0 }, 21030: { prototype: 21030, tokenName: "Name_265", img: "1111", quality: 2, category: 1, mmNum: 0 }, 31030: { prototype: 31030, tokenName: "Name_265", img: "1111", quality: 3, category: 1, mmNum: 0 }, 41030: { prototype: 41030, tokenName: "Name_266", img: "1111", quality: 4, category: 1, mmNum: 200 }, 12001: { prototype: 12001, tokenName: "Name_41", img: "1111", quality: 1, category: 2, mmNum: 0 }, 22001: { prototype: 22001, tokenName: "Name_41", img: "1111", quality: 2, category: 2, mmNum: 0 }, 32001: { prototype: 32001, tokenName: "Name_41", img: "1111", quality: 3, category: 2, mmNum: 0 }, 42001: { prototype: 42001, tokenName: "Name_42", img: "1111", quality: 4, category: 2, mmNum: 200 }, 12002: { prototype: 12002, tokenName: "Name_43", img: "1111", quality: 1, category: 2, mmNum: 0 }, 22002: { prototype: 22002, tokenName: "Name_43", img: "1111", quality: 2, category: 2, mmNum: 0 }, 32002: { prototype: 32002, tokenName: "Name_43", img: "1111", quality: 3, category: 2, mmNum: 0 }, 42002: { prototype: 42002, tokenName: "Name_44", img: "1111", quality: 4, category: 2, mmNum: 200 }, 12003: { prototype: 12003, tokenName: "Name_45", img: "1111", quality: 1, category: 2, mmNum: 0 }, 22003: { prototype: 22003, tokenName: "Name_45", img: "1111", quality: 2, category: 2, mmNum: 0 }, 32003: { prototype: 32003, tokenName: "Name_45", img: "1111", quality: 3, category: 2, mmNum: 0 }, 42003: { prototype: 42003, tokenName: "Name_46", img: "1111", quality: 4, category: 2, mmNum: 200 }, 12004: { prototype: 12004, tokenName: "Name_47", img: "1111", quality: 1, category: 2, mmNum: 0 }, 22004: { prototype: 22004, tokenName: "Name_47", img: "1111", quality: 2, category: 2, mmNum: 0 }, 32004: { prototype: 32004, tokenName: "Name_47", img: "1111", quality: 3, category: 2, mmNum: 0 }, 42004: { prototype: 42004, tokenName: "Name_48", img: "1111", quality: 4, category: 2, mmNum: 200 }, 12005: { prototype: 12005, tokenName: "Name_49", img: "1111", quality: 1, category: 2, mmNum: 0 }, 22005: { prototype: 22005, tokenName: "Name_49", img: "1111", quality: 2, category: 2, mmNum: 0 }, 32005: { prototype: 32005, tokenName: "Name_49", img: "1111", quality: 3, category: 2, mmNum: 0 }, 42005: { prototype: 42005, tokenName: "Name_50", img: "1111", quality: 4, category: 2, mmNum: 200 }, 12006: { prototype: 12006, tokenName: "Name_51", img: "1111", quality: 1, category: 2, mmNum: 0 }, 22006: { prototype: 22006, tokenName: "Name_51", img: "1111", quality: 2, category: 2, mmNum: 0 }, 32006: { prototype: 32006, tokenName: "Name_51", img: "1111", quality: 3, category: 2, mmNum: 0 }, 42006: { prototype: 42006, tokenName: "Name_52", img: "1111", quality: 4, category: 2, mmNum: 200 }, 12007: { prototype: 12007, tokenName: "Name_53", img: "1111", quality: 1, category: 2, mmNum: 0 }, 22007: { prototype: 22007, tokenName: "Name_53", img: "1111", quality: 2, category: 2, mmNum: 0 }, 32007: { prototype: 32007, tokenName: "Name_53", img: "1111", quality: 3, category: 2, mmNum: 0 }, 42007: { prototype: 42007, tokenName: "Name_54", img: "1111", quality: 4, category: 2, mmNum: 200 }, 12008: { prototype: 12008, tokenName: "Name_55", img: "1111", quality: 1, category: 2, mmNum: 0 }, 22008: { prototype: 22008, tokenName: "Name_55", img: "1111", quality: 2, category: 2, mmNum: 0 }, 32008: { prototype: 32008, tokenName: "Name_55", img: "1111", quality: 3, category: 2, mmNum: 0 }, 42008: { prototype: 42008, tokenName: "Name_56", img: "1111", quality: 4, category: 2, mmNum: 200 }, 12009: { prototype: 12009, tokenName: "Name_57", img: "1111", quality: 1, category: 2, mmNum: 0 }, 22009: { prototype: 22009, tokenName: "Name_57", img: "1111", quality: 2, category: 2, mmNum: 0 }, 32009: { prototype: 32009, tokenName: "Name_57", img: "1111", quality: 3, category: 2, mmNum: 0 }, 42009: { prototype: 42009, tokenName: "Name_58", img: "1111", quality: 4, category: 2, mmNum: 200 }, 12010: { prototype: 12010, tokenName: "Name_59", img: "1111", quality: 1, category: 2, mmNum: 0 }, 22010: { prototype: 22010, tokenName: "Name_59", img: "1111", quality: 2, category: 2, mmNum: 0 }, 32010: { prototype: 32010, tokenName: "Name_59", img: "1111", quality: 3, category: 2, mmNum: 0 }, 42010: { prototype: 42010, tokenName: "Name_60", img: "1111", quality: 4, category: 2, mmNum: 200 }, 12011: { prototype: 12011, tokenName: "Name_61", img: "1111", quality: 1, category: 2, mmNum: 0 }, 22011: { prototype: 22011, tokenName: "Name_61", img: "1111", quality: 2, category: 2, mmNum: 0 }, 32011: { prototype: 32011, tokenName: "Name_61", img: "1111", quality: 3, category: 2, mmNum: 0 }, 42011: { prototype: 42011, tokenName: "Name_62", img: "1111", quality: 4, category: 2, mmNum: 200 }, 12012: { prototype: 12012, tokenName: "Name_63", img: "1111", quality: 1, category: 2, mmNum: 0 }, 22012: { prototype: 22012, tokenName: "Name_63", img: "1111", quality: 2, category: 2, mmNum: 0 }, 32012: { prototype: 32012, tokenName: "Name_63", img: "1111", quality: 3, category: 2, mmNum: 0 }, 42012: { prototype: 42012, tokenName: "Name_64", img: "1111", quality: 4, category: 2, mmNum: 200 }, 12013: { prototype: 12013, tokenName: "Name_65", img: "1111", quality: 1, category: 2, mmNum: 0 }, 22013: { prototype: 22013, tokenName: "Name_65", img: "1111", quality: 2, category: 2, mmNum: 0 }, 32013: { prototype: 32013, tokenName: "Name_65", img: "1111", quality: 3, category: 2, mmNum: 0 }, 42013: { prototype: 42013, tokenName: "Name_66", img: "1111", quality: 4, category: 2, mmNum: 200 }, 12014: { prototype: 12014, tokenName: "Name_67", img: "1111", quality: 1, category: 2, mmNum: 0 }, 22014: { prototype: 22014, tokenName: "Name_67", img: "1111", quality: 2, category: 2, mmNum: 0 }, 32014: { prototype: 32014, tokenName: "Name_67", img: "1111", quality: 3, category: 2, mmNum: 0 }, 42014: { prototype: 42014, tokenName: "Name_68", img: "1111", quality: 4, category: 2, mmNum: 200 }, 12015: { prototype: 12015, tokenName: "Name_69", img: "1111", quality: 1, category: 2, mmNum: 0 }, 22015: { prototype: 22015, tokenName: "Name_69", img: "1111", quality: 2, category: 2, mmNum: 0 }, 32015: { prototype: 32015, tokenName: "Name_69", img: "1111", quality: 3, category: 2, mmNum: 0 }, 42015: { prototype: 42015, tokenName: "Name_70", img: "1111", quality: 4, category: 2, mmNum: 200 }, 12016: { prototype: 12016, tokenName: "Name_71", img: "1111", quality: 1, category: 2, mmNum: 0 }, 22016: { prototype: 22016, tokenName: "Name_71", img: "1111", quality: 2, category: 2, mmNum: 0 }, 32016: { prototype: 32016, tokenName: "Name_71", img: "1111", quality: 3, category: 2, mmNum: 0 }, 42016: { prototype: 42016, tokenName: "Name_72", img: "1111", quality: 4, category: 2, mmNum: 200 }, 12017: { prototype: 12017, tokenName: "Name_73", img: "1111", quality: 1, category: 2, mmNum: 0 }, 22017: { prototype: 22017, tokenName: "Name_73", img: "1111", quality: 2, category: 2, mmNum: 0 }, 32017: { prototype: 32017, tokenName: "Name_73", img: "1111", quality: 3, category: 2, mmNum: 0 }, 42017: { prototype: 42017, tokenName: "Name_74", img: "1111", quality: 4, category: 2, mmNum: 200 }, 12018: { prototype: 12018, tokenName: "Name_75", img: "1111", quality: 1, category: 2, mmNum: 0 }, 22018: { prototype: 22018, tokenName: "Name_75", img: "1111", quality: 2, category: 2, mmNum: 0 }, 32018: { prototype: 32018, tokenName: "Name_75", img: "1111", quality: 3, category: 2, mmNum: 0 }, 42018: { prototype: 42018, tokenName: "Name_76", img: "1111", quality: 4, category: 2, mmNum: 200 }, 12019: { prototype: 12019, tokenName: "Name_77", img: "1111", quality: 1, category: 2, mmNum: 0 }, 22019: { prototype: 22019, tokenName: "Name_77", img: "1111", quality: 2, category: 2, mmNum: 0 }, 32019: { prototype: 32019, tokenName: "Name_77", img: "1111", quality: 3, category: 2, mmNum: 0 }, 42019: { prototype: 42019, tokenName: "Name_78", img: "1111", quality: 4, category: 2, mmNum: 200 }, 12020: { prototype: 12020, tokenName: "Name_79", img: "1111", quality: 1, category: 2, mmNum: 0 }, 22020: { prototype: 22020, tokenName: "Name_79", img: "1111", quality: 2, category: 2, mmNum: 0 }, 32020: { prototype: 32020, tokenName: "Name_79", img: "1111", quality: 3, category: 2, mmNum: 0 }, 42020: { prototype: 42020, tokenName: "Name_80", img: "1111", quality: 4, category: 2, mmNum: 200 }, 12021: { prototype: 12021, tokenName: "Name_267", img: "1111", quality: 1, category: 2, mmNum: 0 }, 22021: { prototype: 22021, tokenName: "Name_267", img: "1111", quality: 2, category: 2, mmNum: 0 }, 32021: { prototype: 32021, tokenName: "Name_267", img: "1111", quality: 3, category: 2, mmNum: 0 }, 42021: { prototype: 42021, tokenName: "Name_268", img: "1111", quality: 4, category: 2, mmNum: 200 }, 12022: { prototype: 12022, tokenName: "Name_269", img: "1111", quality: 1, category: 2, mmNum: 0 }, 22022: { prototype: 22022, tokenName: "Name_269", img: "1111", quality: 2, category: 2, mmNum: 0 }, 32022: { prototype: 32022, tokenName: "Name_269", img: "1111", quality: 3, category: 2, mmNum: 0 }, 42022: { prototype: 42022, tokenName: "Name_270", img: "1111", quality: 4, category: 2, mmNum: 200 }, 12023: { prototype: 12023, tokenName: "Name_271", img: "1111", quality: 1, category: 2, mmNum: 0 }, 22023: { prototype: 22023, tokenName: "Name_271", img: "1111", quality: 2, category: 2, mmNum: 0 }, 32023: { prototype: 32023, tokenName: "Name_271", img: "1111", quality: 3, category: 2, mmNum: 0 }, 42023: { prototype: 42023, tokenName: "Name_272", img: "1111", quality: 4, category: 2, mmNum: 200 }, 12024: { prototype: 12024, tokenName: "Name_273", img: "1111", quality: 1, category: 2, mmNum: 0 }, 22024: { prototype: 22024, tokenName: "Name_273", img: "1111", quality: 2, category: 2, mmNum: 0 }, 32024: { prototype: 32024, tokenName: "Name_273", img: "1111", quality: 3, category: 2, mmNum: 0 }, 42024: { prototype: 42024, tokenName: "Name_274", img: "1111", quality: 4, category: 2, mmNum: 200 }, 12025: { prototype: 12025, tokenName: "Name_275", img: "1111", quality: 1, category: 2, mmNum: 0 }, 22025: { prototype: 22025, tokenName: "Name_275", img: "1111", quality: 2, category: 2, mmNum: 0 }, 32025: { prototype: 32025, tokenName: "Name_275", img: "1111", quality: 3, category: 2, mmNum: 0 }, 42025: { prototype: 42025, tokenName: "Name_276", img: "1111", quality: 4, category: 2, mmNum: 200 }, 12026: { prototype: 12026, tokenName: "Name_277", img: "1111", quality: 1, category: 2, mmNum: 0 }, 22026: { prototype: 22026, tokenName: "Name_277", img: "1111", quality: 2, category: 2, mmNum: 0 }, 32026: { prototype: 32026, tokenName: "Name_277", img: "1111", quality: 3, category: 2, mmNum: 0 }, 42026: { prototype: 42026, tokenName: "Name_278", img: "1111", quality: 4, category: 2, mmNum: 200 }, 12027: { prototype: 12027, tokenName: "Name_279", img: "1111", quality: 1, category: 2, mmNum: 0 }, 22027: { prototype: 22027, tokenName: "Name_279", img: "1111", quality: 2, category: 2, mmNum: 0 }, 32027: { prototype: 32027, tokenName: "Name_279", img: "1111", quality: 3, category: 2, mmNum: 0 }, 42027: { prototype: 42027, tokenName: "Name_280", img: "1111", quality: 4, category: 2, mmNum: 200 }, 12028: { prototype: 12028, tokenName: "Name_281", img: "1111", quality: 1, category: 2, mmNum: 0 }, 22028: { prototype: 22028, tokenName: "Name_281", img: "1111", quality: 2, category: 2, mmNum: 0 }, 32028: { prototype: 32028, tokenName: "Name_281", img: "1111", quality: 3, category: 2, mmNum: 0 }, 42028: { prototype: 42028, tokenName: "Name_282", img: "1111", quality: 4, category: 2, mmNum: 200 }, 12029: { prototype: 12029, tokenName: "Name_283", img: "1111", quality: 1, category: 2, mmNum: 0 }, 22029: { prototype: 22029, tokenName: "Name_283", img: "1111", quality: 2, category: 2, mmNum: 0 }, 32029: { prototype: 32029, tokenName: "Name_283", img: "1111", quality: 3, category: 2, mmNum: 0 }, 42029: { prototype: 42029, tokenName: "Name_284", img: "1111", quality: 4, category: 2, mmNum: 200 }, 12030: { prototype: 12030, tokenName: "Name_285", img: "1111", quality: 1, category: 2, mmNum: 0 }, 22030: { prototype: 22030, tokenName: "Name_285", img: "1111", quality: 2, category: 2, mmNum: 0 }, 32030: { prototype: 32030, tokenName: "Name_285", img: "1111", quality: 3, category: 2, mmNum: 0 }, 42030: { prototype: 42030, tokenName: "Name_286", img: "1111", quality: 4, category: 2, mmNum: 200 }, 13001: { prototype: 13001, tokenName: "Name_81", img: "1111", quality: 1, category: 3, mmNum: 0 }, 23001: { prototype: 23001, tokenName: "Name_81", img: "1111", quality: 2, category: 3, mmNum: 0 }, 33001: { prototype: 33001, tokenName: "Name_81", img: "1111", quality: 3, category: 3, mmNum: 0 }, 43001: { prototype: 43001, tokenName: "Name_82", img: "1111", quality: 4, category: 3, mmNum: 200 }, 13002: { prototype: 13002, tokenName: "Name_83", img: "1111", quality: 1, category: 3, mmNum: 0 }, 23002: { prototype: 23002, tokenName: "Name_83", img: "1111", quality: 2, category: 3, mmNum: 0 }, 33002: { prototype: 33002, tokenName: "Name_83", img: "1111", quality: 3, category: 3, mmNum: 0 }, 43002: { prototype: 43002, tokenName: "Name_84", img: "1111", quality: 4, category: 3, mmNum: 200 }, 13003: { prototype: 13003, tokenName: "Name_85", img: "1111", quality: 1, category: 3, mmNum: 0 }, 23003: { prototype: 23003, tokenName: "Name_85", img: "1111", quality: 2, category: 3, mmNum: 0 }, 33003: { prototype: 33003, tokenName: "Name_85", img: "1111", quality: 3, category: 3, mmNum: 0 }, 43003: { prototype: 43003, tokenName: "Name_86", img: "1111", quality: 4, category: 3, mmNum: 200 }, 13004: { prototype: 13004, tokenName: "Name_87", img: "1111", quality: 1, category: 3, mmNum: 0 }, 23004: { prototype: 23004, tokenName: "Name_87", img: "1111", quality: 2, category: 3, mmNum: 0 }, 33004: { prototype: 33004, tokenName: "Name_87", img: "1111", quality: 3, category: 3, mmNum: 0 }, 43004: { prototype: 43004, tokenName: "Name_88", img: "1111", quality: 4, category: 3, mmNum: 200 }, 13005: { prototype: 13005, tokenName: "Name_89", img: "1111", quality: 1, category: 3, mmNum: 0 }, 23005: { prototype: 23005, tokenName: "Name_89", img: "1111", quality: 2, category: 3, mmNum: 0 }, 33005: { prototype: 33005, tokenName: "Name_89", img: "1111", quality: 3, category: 3, mmNum: 0 }, 43005: { prototype: 43005, tokenName: "Name_90", img: "1111", quality: 4, category: 3, mmNum: 200 }, 13006: { prototype: 13006, tokenName: "Name_91", img: "1111", quality: 1, category: 3, mmNum: 0 }, 23006: { prototype: 23006, tokenName: "Name_91", img: "1111", quality: 2, category: 3, mmNum: 0 }, 33006: { prototype: 33006, tokenName: "Name_91", img: "1111", quality: 3, category: 3, mmNum: 0 }, 43006: { prototype: 43006, tokenName: "Name_92", img: "1111", quality: 4, category: 3, mmNum: 200 }, 13007: { prototype: 13007, tokenName: "Name_93", img: "1111", quality: 1, category: 3, mmNum: 0 }, 23007: { prototype: 23007, tokenName: "Name_93", img: "1111", quality: 2, category: 3, mmNum: 0 }, 33007: { prototype: 33007, tokenName: "Name_93", img: "1111", quality: 3, category: 3, mmNum: 0 }, 43007: { prototype: 43007, tokenName: "Name_94", img: "1111", quality: 4, category: 3, mmNum: 200 }, 13008: { prototype: 13008, tokenName: "Name_95", img: "1111", quality: 1, category: 3, mmNum: 0 }, 23008: { prototype: 23008, tokenName: "Name_95", img: "1111", quality: 2, category: 3, mmNum: 0 }, 33008: { prototype: 33008, tokenName: "Name_95", img: "1111", quality: 3, category: 3, mmNum: 0 }, 43008: { prototype: 43008, tokenName: "Name_96", img: "1111", quality: 4, category: 3, mmNum: 200 }, 13009: { prototype: 13009, tokenName: "Name_97", img: "1111", quality: 1, category: 3, mmNum: 0 }, 23009: { prototype: 23009, tokenName: "Name_97", img: "1111", quality: 2, category: 3, mmNum: 0 }, 33009: { prototype: 33009, tokenName: "Name_97", img: "1111", quality: 3, category: 3, mmNum: 0 }, 43009: { prototype: 43009, tokenName: "Name_98", img: "1111", quality: 4, category: 3, mmNum: 200 }, 13010: { prototype: 13010, tokenName: "Name_99", img: "1111", quality: 1, category: 3, mmNum: 0 }, 23010: { prototype: 23010, tokenName: "Name_99", img: "1111", quality: 2, category: 3, mmNum: 0 }, 33010: { prototype: 33010, tokenName: "Name_99", img: "1111", quality: 3, category: 3, mmNum: 0 }, 43010: { prototype: 43010, tokenName: "Name_100", img: "1111", quality: 4, category: 3, mmNum: 200 }, 13011: { prototype: 13011, tokenName: "Name_101", img: "1111", quality: 1, category: 3, mmNum: 0 }, 23011: { prototype: 23011, tokenName: "Name_101", img: "1111", quality: 2, category: 3, mmNum: 0 }, 33011: { prototype: 33011, tokenName: "Name_101", img: "1111", quality: 3, category: 3, mmNum: 0 }, 43011: { prototype: 43011, tokenName: "Name_102", img: "1111", quality: 4, category: 3, mmNum: 200 }, 13012: { prototype: 13012, tokenName: "Name_103", img: "1111", quality: 1, category: 3, mmNum: 0 }, 23012: { prototype: 23012, tokenName: "Name_103", img: "1111", quality: 2, category: 3, mmNum: 0 }, 33012: { prototype: 33012, tokenName: "Name_103", img: "1111", quality: 3, category: 3, mmNum: 0 }, 43012: { prototype: 43012, tokenName: "Name_104", img: "1111", quality: 4, category: 3, mmNum: 200 }, 13013: { prototype: 13013, tokenName: "Name_105", img: "1111", quality: 1, category: 3, mmNum: 0 }, 23013: { prototype: 23013, tokenName: "Name_105", img: "1111", quality: 2, category: 3, mmNum: 0 }, 33013: { prototype: 33013, tokenName: "Name_105", img: "1111", quality: 3, category: 3, mmNum: 0 }, 43013: { prototype: 43013, tokenName: "Name_106", img: "1111", quality: 4, category: 3, mmNum: 200 }, 13014: { prototype: 13014, tokenName: "Name_107", img: "1111", quality: 1, category: 3, mmNum: 0 }, 23014: { prototype: 23014, tokenName: "Name_107", img: "1111", quality: 2, category: 3, mmNum: 0 }, 33014: { prototype: 33014, tokenName: "Name_107", img: "1111", quality: 3, category: 3, mmNum: 0 }, 43014: { prototype: 43014, tokenName: "Name_108", img: "1111", quality: 4, category: 3, mmNum: 200 }, 13015: { prototype: 13015, tokenName: "Name_109", img: "1111", quality: 1, category: 3, mmNum: 0 }, 23015: { prototype: 23015, tokenName: "Name_109", img: "1111", quality: 2, category: 3, mmNum: 0 }, 33015: { prototype: 33015, tokenName: "Name_109", img: "1111", quality: 3, category: 3, mmNum: 0 }, 43015: { prototype: 43015, tokenName: "Name_110", img: "1111", quality: 4, category: 3, mmNum: 200 }, 13016: { prototype: 13016, tokenName: "Name_111", img: "1111", quality: 1, category: 3, mmNum: 0 }, 23016: { prototype: 23016, tokenName: "Name_111", img: "1111", quality: 2, category: 3, mmNum: 0 }, 33016: { prototype: 33016, tokenName: "Name_111", img: "1111", quality: 3, category: 3, mmNum: 0 }, 43016: { prototype: 43016, tokenName: "Name_112", img: "1111", quality: 4, category: 3, mmNum: 200 }, 13017: { prototype: 13017, tokenName: "Name_113", img: "1111", quality: 1, category: 3, mmNum: 0 }, 23017: { prototype: 23017, tokenName: "Name_113", img: "1111", quality: 2, category: 3, mmNum: 0 }, 33017: { prototype: 33017, tokenName: "Name_113", img: "1111", quality: 3, category: 3, mmNum: 0 }, 43017: { prototype: 43017, tokenName: "Name_114", img: "1111", quality: 4, category: 3, mmNum: 200 }, 13018: { prototype: 13018, tokenName: "Name_115", img: "1111", quality: 1, category: 3, mmNum: 0 }, 23018: { prototype: 23018, tokenName: "Name_115", img: "1111", quality: 2, category: 3, mmNum: 0 }, 33018: { prototype: 33018, tokenName: "Name_115", img: "1111", quality: 3, category: 3, mmNum: 0 }, 43018: { prototype: 43018, tokenName: "Name_116", img: "1111", quality: 4, category: 3, mmNum: 200 }, 13019: { prototype: 13019, tokenName: "Name_117", img: "1111", quality: 1, category: 3, mmNum: 0 }, 23019: { prototype: 23019, tokenName: "Name_117", img: "1111", quality: 2, category: 3, mmNum: 0 }, 33019: { prototype: 33019, tokenName: "Name_117", img: "1111", quality: 3, category: 3, mmNum: 0 }, 43019: { prototype: 43019, tokenName: "Name_118", img: "1111", quality: 4, category: 3, mmNum: 200 }, 13020: { prototype: 13020, tokenName: "Name_119", img: "1111", quality: 1, category: 3, mmNum: 0 }, 23020: { prototype: 23020, tokenName: "Name_119", img: "1111", quality: 2, category: 3, mmNum: 0 }, 33020: { prototype: 33020, tokenName: "Name_119", img: "1111", quality: 3, category: 3, mmNum: 0 }, 43020: { prototype: 43020, tokenName: "Name_120", img: "1111", quality: 4, category: 3, mmNum: 200 }, 13021: { prototype: 13021, tokenName: "Name_287", img: "1111", quality: 1, category: 3, mmNum: 0 }, 23021: { prototype: 23021, tokenName: "Name_287", img: "1111", quality: 2, category: 3, mmNum: 0 }, 33021: { prototype: 33021, tokenName: "Name_287", img: "1111", quality: 3, category: 3, mmNum: 0 }, 43021: { prototype: 43021, tokenName: "Name_288", img: "1111", quality: 4, category: 3, mmNum: 200 }, 13022: { prototype: 13022, tokenName: "Name_289", img: "1111", quality: 1, category: 3, mmNum: 0 }, 23022: { prototype: 23022, tokenName: "Name_289", img: "1111", quality: 2, category: 3, mmNum: 0 }, 33022: { prototype: 33022, tokenName: "Name_289", img: "1111", quality: 3, category: 3, mmNum: 0 }, 43022: { prototype: 43022, tokenName: "Name_290", img: "1111", quality: 4, category: 3, mmNum: 200 }, 13023: { prototype: 13023, tokenName: "Name_291", img: "1111", quality: 1, category: 3, mmNum: 0 }, 23023: { prototype: 23023, tokenName: "Name_291", img: "1111", quality: 2, category: 3, mmNum: 0 }, 33023: { prototype: 33023, tokenName: "Name_291", img: "1111", quality: 3, category: 3, mmNum: 0 }, 43023: { prototype: 43023, tokenName: "Name_292", img: "1111", quality: 4, category: 3, mmNum: 200 }, 13024: { prototype: 13024, tokenName: "Name_293", img: "1111", quality: 1, category: 3, mmNum: 0 }, 23024: { prototype: 23024, tokenName: "Name_293", img: "1111", quality: 2, category: 3, mmNum: 0 }, 33024: { prototype: 33024, tokenName: "Name_293", img: "1111", quality: 3, category: 3, mmNum: 0 }, 43024: { prototype: 43024, tokenName: "Name_294", img: "1111", quality: 4, category: 3, mmNum: 200 }, 13025: { prototype: 13025, tokenName: "Name_295", img: "1111", quality: 1, category: 3, mmNum: 0 }, 23025: { prototype: 23025, tokenName: "Name_295", img: "1111", quality: 2, category: 3, mmNum: 0 }, 33025: { prototype: 33025, tokenName: "Name_295", img: "1111", quality: 3, category: 3, mmNum: 0 }, 43025: { prototype: 43025, tokenName: "Name_296", img: "1111", quality: 4, category: 3, mmNum: 200 }, 13026: { prototype: 13026, tokenName: "Name_297", img: "1111", quality: 1, category: 3, mmNum: 0 }, 23026: { prototype: 23026, tokenName: "Name_297", img: "1111", quality: 2, category: 3, mmNum: 0 }, 33026: { prototype: 33026, tokenName: "Name_297", img: "1111", quality: 3, category: 3, mmNum: 0 }, 43026: { prototype: 43026, tokenName: "Name_298", img: "1111", quality: 4, category: 3, mmNum: 200 }, 13027: { prototype: 13027, tokenName: "Name_299", img: "1111", quality: 1, category: 3, mmNum: 0 }, 23027: { prototype: 23027, tokenName: "Name_299", img: "1111", quality: 2, category: 3, mmNum: 0 }, 33027: { prototype: 33027, tokenName: "Name_299", img: "1111", quality: 3, category: 3, mmNum: 0 }, 43027: { prototype: 43027, tokenName: "Name_300", img: "1111", quality: 4, category: 3, mmNum: 200 }, 13028: { prototype: 13028, tokenName: "Name_301", img: "1111", quality: 1, category: 3, mmNum: 0 }, 23028: { prototype: 23028, tokenName: "Name_301", img: "1111", quality: 2, category: 3, mmNum: 0 }, 33028: { prototype: 33028, tokenName: "Name_301", img: "1111", quality: 3, category: 3, mmNum: 0 }, 43028: { prototype: 43028, tokenName: "Name_302", img: "1111", quality: 4, category: 3, mmNum: 200 }, 13029: { prototype: 13029, tokenName: "Name_303", img: "1111", quality: 1, category: 3, mmNum: 0 }, 23029: { prototype: 23029, tokenName: "Name_303", img: "1111", quality: 2, category: 3, mmNum: 0 }, 33029: { prototype: 33029, tokenName: "Name_303", img: "1111", quality: 3, category: 3, mmNum: 0 }, 43029: { prototype: 43029, tokenName: "Name_304", img: "1111", quality: 4, category: 3, mmNum: 200 }, 13030: { prototype: 13030, tokenName: "Name_305", img: "1111", quality: 1, category: 3, mmNum: 0 }, 23030: { prototype: 23030, tokenName: "Name_305", img: "1111", quality: 2, category: 3, mmNum: 0 }, 33030: { prototype: 33030, tokenName: "Name_305", img: "1111", quality: 3, category: 3, mmNum: 0 }, 43030: { prototype: 43030, tokenName: "Name_306", img: "1111", quality: 4, category: 3, mmNum: 200 }, 14001: { prototype: 14001, tokenName: "Name_121", img: "1111", quality: 1, category: 4, mmNum: 0 }, 24001: { prototype: 24001, tokenName: "Name_121", img: "1111", quality: 2, category: 4, mmNum: 0 }, 34001: { prototype: 34001, tokenName: "Name_121", img: "1111", quality: 3, category: 4, mmNum: 0 }, 44001: { prototype: 44001, tokenName: "Name_122", img: "1111", quality: 4, category: 4, mmNum: 200 }, 14002: { prototype: 14002, tokenName: "Name_123", img: "1111", quality: 1, category: 4, mmNum: 0 }, 24002: { prototype: 24002, tokenName: "Name_123", img: "1111", quality: 2, category: 4, mmNum: 0 }, 34002: { prototype: 34002, tokenName: "Name_123", img: "1111", quality: 3, category: 4, mmNum: 0 }, 44002: { prototype: 44002, tokenName: "Name_124", img: "1111", quality: 4, category: 4, mmNum: 200 }, 14003: { prototype: 14003, tokenName: "Name_125", img: "1111", quality: 1, category: 4, mmNum: 0 }, 24003: { prototype: 24003, tokenName: "Name_125", img: "1111", quality: 2, category: 4, mmNum: 0 }, 34003: { prototype: 34003, tokenName: "Name_125", img: "1111", quality: 3, category: 4, mmNum: 0 }, 44003: { prototype: 44003, tokenName: "Name_126", img: "1111", quality: 4, category: 4, mmNum: 200 }, 14004: { prototype: 14004, tokenName: "Name_127", img: "1111", quality: 1, category: 4, mmNum: 0 }, 24004: { prototype: 24004, tokenName: "Name_127", img: "1111", quality: 2, category: 4, mmNum: 0 }, 34004: { prototype: 34004, tokenName: "Name_127", img: "1111", quality: 3, category: 4, mmNum: 0 }, 44004: { prototype: 44004, tokenName: "Name_128", img: "1111", quality: 4, category: 4, mmNum: 200 }, 14005: { prototype: 14005, tokenName: "Name_129", img: "1111", quality: 1, category: 4, mmNum: 0 }, 24005: { prototype: 24005, tokenName: "Name_129", img: "1111", quality: 2, category: 4, mmNum: 0 }, 34005: { prototype: 34005, tokenName: "Name_129", img: "1111", quality: 3, category: 4, mmNum: 0 }, 44005: { prototype: 44005, tokenName: "Name_130", img: "1111", quality: 4, category: 4, mmNum: 200 }, 14006: { prototype: 14006, tokenName: "Name_131", img: "1111", quality: 1, category: 4, mmNum: 0 }, 24006: { prototype: 24006, tokenName: "Name_131", img: "1111", quality: 2, category: 4, mmNum: 0 }, 34006: { prototype: 34006, tokenName: "Name_131", img: "1111", quality: 3, category: 4, mmNum: 0 }, 44006: { prototype: 44006, tokenName: "Name_132", img: "1111", quality: 4, category: 4, mmNum: 200 }, 14007: { prototype: 14007, tokenName: "Name_133", img: "1111", quality: 1, category: 4, mmNum: 0 }, 24007: { prototype: 24007, tokenName: "Name_133", img: "1111", quality: 2, category: 4, mmNum: 0 }, 34007: { prototype: 34007, tokenName: "Name_133", img: "1111", quality: 3, category: 4, mmNum: 0 }, 44007: { prototype: 44007, tokenName: "Name_134", img: "1111", quality: 4, category: 4, mmNum: 200 }, 14008: { prototype: 14008, tokenName: "Name_135", img: "1111", quality: 1, category: 4, mmNum: 0 }, 24008: { prototype: 24008, tokenName: "Name_135", img: "1111", quality: 2, category: 4, mmNum: 0 }, 34008: { prototype: 34008, tokenName: "Name_135", img: "1111", quality: 3, category: 4, mmNum: 0 }, 44008: { prototype: 44008, tokenName: "Name_136", img: "1111", quality: 4, category: 4, mmNum: 200 }, 14009: { prototype: 14009, tokenName: "Name_137", img: "1111", quality: 1, category: 4, mmNum: 0 }, 24009: { prototype: 24009, tokenName: "Name_137", img: "1111", quality: 2, category: 4, mmNum: 0 }, 34009: { prototype: 34009, tokenName: "Name_137", img: "1111", quality: 3, category: 4, mmNum: 0 }, 44009: { prototype: 44009, tokenName: "Name_138", img: "1111", quality: 4, category: 4, mmNum: 200 }, 14010: { prototype: 14010, tokenName: "Name_139", img: "1111", quality: 1, category: 4, mmNum: 0 }, 24010: { prototype: 24010, tokenName: "Name_139", img: "1111", quality: 2, category: 4, mmNum: 0 }, 34010: { prototype: 34010, tokenName: "Name_139", img: "1111", quality: 3, category: 4, mmNum: 0 }, 44010: { prototype: 44010, tokenName: "Name_140", img: "1111", quality: 4, category: 4, mmNum: 200 }, 14011: { prototype: 14011, tokenName: "Name_141", img: "1111", quality: 1, category: 4, mmNum: 0 }, 24011: { prototype: 24011, tokenName: "Name_141", img: "1111", quality: 2, category: 4, mmNum: 0 }, 34011: { prototype: 34011, tokenName: "Name_141", img: "1111", quality: 3, category: 4, mmNum: 0 }, 44011: { prototype: 44011, tokenName: "Name_142", img: "1111", quality: 4, category: 4, mmNum: 200 }, 14012: { prototype: 14012, tokenName: "Name_143", img: "1111", quality: 1, category: 4, mmNum: 0 }, 24012: { prototype: 24012, tokenName: "Name_143", img: "1111", quality: 2, category: 4, mmNum: 0 }, 34012: { prototype: 34012, tokenName: "Name_143", img: "1111", quality: 3, category: 4, mmNum: 0 }, 44012: { prototype: 44012, tokenName: "Name_144", img: "1111", quality: 4, category: 4, mmNum: 200 }, 14013: { prototype: 14013, tokenName: "Name_145", img: "1111", quality: 1, category: 4, mmNum: 0 }, 24013: { prototype: 24013, tokenName: "Name_145", img: "1111", quality: 2, category: 4, mmNum: 0 }, 34013: { prototype: 34013, tokenName: "Name_145", img: "1111", quality: 3, category: 4, mmNum: 0 }, 44013: { prototype: 44013, tokenName: "Name_146", img: "1111", quality: 4, category: 4, mmNum: 200 }, 14014: { prototype: 14014, tokenName: "Name_147", img: "1111", quality: 1, category: 4, mmNum: 0 }, 24014: { prototype: 24014, tokenName: "Name_147", img: "1111", quality: 2, category: 4, mmNum: 0 }, 34014: { prototype: 34014, tokenName: "Name_147", img: "1111", quality: 3, category: 4, mmNum: 0 }, 44014: { prototype: 44014, tokenName: "Name_148", img: "1111", quality: 4, category: 4, mmNum: 200 }, 14015: { prototype: 14015, tokenName: "Name_149", img: "1111", quality: 1, category: 4, mmNum: 0 }, 24015: { prototype: 24015, tokenName: "Name_149", img: "1111", quality: 2, category: 4, mmNum: 0 }, 34015: { prototype: 34015, tokenName: "Name_149", img: "1111", quality: 3, category: 4, mmNum: 0 }, 44015: { prototype: 44015, tokenName: "Name_150", img: "1111", quality: 4, category: 4, mmNum: 200 }, 14016: { prototype: 14016, tokenName: "Name_151", img: "1111", quality: 1, category: 4, mmNum: 0 }, 24016: { prototype: 24016, tokenName: "Name_151", img: "1111", quality: 2, category: 4, mmNum: 0 }, 34016: { prototype: 34016, tokenName: "Name_151", img: "1111", quality: 3, category: 4, mmNum: 0 }, 44016: { prototype: 44016, tokenName: "Name_152", img: "1111", quality: 4, category: 4, mmNum: 200 }, 14017: { prototype: 14017, tokenName: "Name_153", img: "1111", quality: 1, category: 4, mmNum: 0 }, 24017: { prototype: 24017, tokenName: "Name_153", img: "1111", quality: 2, category: 4, mmNum: 0 }, 34017: { prototype: 34017, tokenName: "Name_153", img: "1111", quality: 3, category: 4, mmNum: 0 }, 44017: { prototype: 44017, tokenName: "Name_154", img: "1111", quality: 4, category: 4, mmNum: 200 }, 14018: { prototype: 14018, tokenName: "Name_155", img: "1111", quality: 1, category: 4, mmNum: 0 }, 24018: { prototype: 24018, tokenName: "Name_155", img: "1111", quality: 2, category: 4, mmNum: 0 }, 34018: { prototype: 34018, tokenName: "Name_155", img: "1111", quality: 3, category: 4, mmNum: 0 }, 44018: { prototype: 44018, tokenName: "Name_156", img: "1111", quality: 4, category: 4, mmNum: 200 }, 14019: { prototype: 14019, tokenName: "Name_157", img: "1111", quality: 1, category: 4, mmNum: 0 }, 24019: { prototype: 24019, tokenName: "Name_157", img: "1111", quality: 2, category: 4, mmNum: 0 }, 34019: { prototype: 34019, tokenName: "Name_157", img: "1111", quality: 3, category: 4, mmNum: 0 }, 44019: { prototype: 44019, tokenName: "Name_158", img: "1111", quality: 4, category: 4, mmNum: 200 }, 14020: { prototype: 14020, tokenName: "Name_159", img: "1111", quality: 1, category: 4, mmNum: 0 }, 24020: { prototype: 24020, tokenName: "Name_159", img: "1111", quality: 2, category: 4, mmNum: 0 }, 34020: { prototype: 34020, tokenName: "Name_159", img: "1111", quality: 3, category: 4, mmNum: 0 }, 44020: { prototype: 44020, tokenName: "Name_160", img: "1111", quality: 4, category: 4, mmNum: 200 }, 14021: { prototype: 14021, tokenName: "Name_307", img: "1111", quality: 1, category: 4, mmNum: 0 }, 24021: { prototype: 24021, tokenName: "Name_307", img: "1111", quality: 2, category: 4, mmNum: 0 }, 34021: { prototype: 34021, tokenName: "Name_307", img: "1111", quality: 3, category: 4, mmNum: 0 }, 44021: { prototype: 44021, tokenName: "Name_308", img: "1111", quality: 4, category: 4, mmNum: 200 }, 14022: { prototype: 14022, tokenName: "Name_309", img: "1111", quality: 1, category: 4, mmNum: 0 }, 24022: { prototype: 24022, tokenName: "Name_309", img: "1111", quality: 2, category: 4, mmNum: 0 }, 34022: { prototype: 34022, tokenName: "Name_309", img: "1111", quality: 3, category: 4, mmNum: 0 }, 44022: { prototype: 44022, tokenName: "Name_310", img: "1111", quality: 4, category: 4, mmNum: 200 }, 14023: { prototype: 14023, tokenName: "Name_311", img: "1111", quality: 1, category: 4, mmNum: 0 }, 24023: { prototype: 24023, tokenName: "Name_311", img: "1111", quality: 2, category: 4, mmNum: 0 }, 34023: { prototype: 34023, tokenName: "Name_311", img: "1111", quality: 3, category: 4, mmNum: 0 }, 44023: { prototype: 44023, tokenName: "Name_312", img: "1111", quality: 4, category: 4, mmNum: 200 }, 14024: { prototype: 14024, tokenName: "Name_313", img: "1111", quality: 1, category: 4, mmNum: 0 }, 24024: { prototype: 24024, tokenName: "Name_313", img: "1111", quality: 2, category: 4, mmNum: 0 }, 34024: { prototype: 34024, tokenName: "Name_313", img: "1111", quality: 3, category: 4, mmNum: 0 }, 44024: { prototype: 44024, tokenName: "Name_314", img: "1111", quality: 4, category: 4, mmNum: 200 }, 14025: { prototype: 14025, tokenName: "Name_315", img: "1111", quality: 1, category: 4, mmNum: 0 }, 24025: { prototype: 24025, tokenName: "Name_315", img: "1111", quality: 2, category: 4, mmNum: 0 }, 34025: { prototype: 34025, tokenName: "Name_315", img: "1111", quality: 3, category: 4, mmNum: 0 }, 44025: { prototype: 44025, tokenName: "Name_316", img: "1111", quality: 4, category: 4, mmNum: 200 }, 14026: { prototype: 14026, tokenName: "Name_317", img: "1111", quality: 1, category: 4, mmNum: 0 }, 24026: { prototype: 24026, tokenName: "Name_317", img: "1111", quality: 2, category: 4, mmNum: 0 }, 34026: { prototype: 34026, tokenName: "Name_317", img: "1111", quality: 3, category: 4, mmNum: 0 }, 44026: { prototype: 44026, tokenName: "Name_318", img: "1111", quality: 4, category: 4, mmNum: 200 }, 14027: { prototype: 14027, tokenName: "Name_319", img: "1111", quality: 1, category: 4, mmNum: 0 }, 24027: { prototype: 24027, tokenName: "Name_319", img: "1111", quality: 2, category: 4, mmNum: 0 }, 34027: { prototype: 34027, tokenName: "Name_319", img: "1111", quality: 3, category: 4, mmNum: 0 }, 44027: { prototype: 44027, tokenName: "Name_320", img: "1111", quality: 4, category: 4, mmNum: 200 }, 14028: { prototype: 14028, tokenName: "Name_321", img: "1111", quality: 1, category: 4, mmNum: 0 }, 24028: { prototype: 24028, tokenName: "Name_321", img: "1111", quality: 2, category: 4, mmNum: 0 }, 34028: { prototype: 34028, tokenName: "Name_321", img: "1111", quality: 3, category: 4, mmNum: 0 }, 44028: { prototype: 44028, tokenName: "Name_322", img: "1111", quality: 4, category: 4, mmNum: 200 }, 14029: { prototype: 14029, tokenName: "Name_323", img: "1111", quality: 1, category: 4, mmNum: 0 }, 24029: { prototype: 24029, tokenName: "Name_323", img: "1111", quality: 2, category: 4, mmNum: 0 }, 34029: { prototype: 34029, tokenName: "Name_323", img: "1111", quality: 3, category: 4, mmNum: 0 }, 44029: { prototype: 44029, tokenName: "Name_324", img: "1111", quality: 4, category: 4, mmNum: 200 }, 14030: { prototype: 14030, tokenName: "Name_325", img: "1111", quality: 1, category: 4, mmNum: 0 }, 24030: { prototype: 24030, tokenName: "Name_325", img: "1111", quality: 2, category: 4, mmNum: 0 }, 34030: { prototype: 34030, tokenName: "Name_325", img: "1111", quality: 3, category: 4, mmNum: 0 }, 44030: { prototype: 44030, tokenName: "Name_326", img: "1111", quality: 4, category: 4, mmNum: 200 }, 50001: { prototype: 50001, tokenName: "Name_161", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50002: { prototype: 50002, tokenName: "Name_162", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50003: { prototype: 50003, tokenName: "Name_163", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50004: { prototype: 50004, tokenName: "Name_164", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50005: { prototype: 50005, tokenName: "Name_165", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50006: { prototype: 50006, tokenName: "Name_166", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50007: { prototype: 50007, tokenName: "Name_167", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50008: { prototype: 50008, tokenName: "Name_168", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50009: { prototype: 50009, tokenName: "Name_169", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50010: { prototype: 50010, tokenName: "Name_170", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50011: { prototype: 50011, tokenName: "Name_171", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50012: { prototype: 50012, tokenName: "Name_172", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50013: { prototype: 50013, tokenName: "Name_173", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50014: { prototype: 50014, tokenName: "Name_174", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50015: { prototype: 50015, tokenName: "Name_175", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50016: { prototype: 50016, tokenName: "Name_176", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50017: { prototype: 50017, tokenName: "Name_177", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50018: { prototype: 50018, tokenName: "Name_178", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50019: { prototype: 50019, tokenName: "Name_179", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50020: { prototype: 50020, tokenName: "Name_180", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50021: { prototype: 50021, tokenName: "Name_181", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50022: { prototype: 50022, tokenName: "Name_182", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50023: { prototype: 50023, tokenName: "Name_183", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50024: { prototype: 50024, tokenName: "Name_184", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50025: { prototype: 50025, tokenName: "Name_185", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50026: { prototype: 50026, tokenName: "Name_186", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50027: { prototype: 50027, tokenName: "Name_187", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50028: { prototype: 50028, tokenName: "Name_188", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50029: { prototype: 50029, tokenName: "Name_189", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50030: { prototype: 50030, tokenName: "Name_190", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50031: { prototype: 50031, tokenName: "Name_191", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50032: { prototype: 50032, tokenName: "Name_192", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50033: { prototype: 50033, tokenName: "Name_193", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50034: { prototype: 50034, tokenName: "Name_194", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50035: { prototype: 50035, tokenName: "Name_195", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50036: { prototype: 50036, tokenName: "Name_196", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50037: { prototype: 50037, tokenName: "Name_197", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50038: { prototype: 50038, tokenName: "Name_198", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50039: { prototype: 50039, tokenName: "Name_199", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50040: { prototype: 50040, tokenName: "Name_200", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50041: { prototype: 50041, tokenName: "Name_201", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50042: { prototype: 50042, tokenName: "Name_202", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50043: { prototype: 50043, tokenName: "Name_203", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50044: { prototype: 50044, tokenName: "Name_204", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50045: { prototype: 50045, tokenName: "Name_205", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50046: { prototype: 50046, tokenName: "Name_206", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50047: { prototype: 50047, tokenName: "Name_207", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50048: { prototype: 50048, tokenName: "Name_208", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50049: { prototype: 50049, tokenName: "Name_209", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50050: { prototype: 50050, tokenName: "Name_210", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50051: { prototype: 50051, tokenName: "Name_211", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50052: { prototype: 50052, tokenName: "Name_212", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50053: { prototype: 50053, tokenName: "Name_213", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50054: { prototype: 50054, tokenName: "Name_214", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50055: { prototype: 50055, tokenName: "Name_215", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50056: { prototype: 50056, tokenName: "Name_216", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50057: { prototype: 50057, tokenName: "Name_217", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50058: { prototype: 50058, tokenName: "Name_218", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50059: { prototype: 50059, tokenName: "Name_219", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50060: { prototype: 50060, tokenName: "Name_220", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50061: { prototype: 50061, tokenName: "Name_221", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50062: { prototype: 50062, tokenName: "Name_222", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50063: { prototype: 50063, tokenName: "Name_223", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50064: { prototype: 50064, tokenName: "Name_224", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50065: { prototype: 50065, tokenName: "Name_225", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50066: { prototype: 50066, tokenName: "Name_226", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50067: { prototype: 50067, tokenName: "Name_227", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50068: { prototype: 50068, tokenName: "Name_228", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50069: { prototype: 50069, tokenName: "Name_229", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50070: { prototype: 50070, tokenName: "Name_230", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50071: { prototype: 50071, tokenName: "Name_231", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50072: { prototype: 50072, tokenName: "Name_232", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50073: { prototype: 50073, tokenName: "Name_233", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50074: { prototype: 50074, tokenName: "Name_234", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50075: { prototype: 50075, tokenName: "Name_235", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50076: { prototype: 50076, tokenName: "Name_236", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50077: { prototype: 50077, tokenName: "Name_237", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50078: { prototype: 50078, tokenName: "Name_238", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50079: { prototype: 50079, tokenName: "Name_239", img: "1111", quality: 5, category: 5, mmNum: 50 }, 50080: { prototype: 50080, tokenName: "Name_240", img: "1111", quality: 5, category: 5, mmNum: 50 }, 60001: { prototype: 60001, tokenName: "Name_241", img: "1111", quality: 6, category: 5, mmNum: 5 }, 60002: { prototype: 60002, tokenName: "Name_242", img: "1111", quality: 6, category: 5, mmNum: 5 }, 60003: { prototype: 60003, tokenName: "Name_243", img: "1111", quality: 6, category: 5, mmNum: 5 }, 60004: { prototype: 60004, tokenName: "Name_244", img: "1111", quality: 6, category: 5, mmNum: 5 }, 60005: { prototype: 60005, tokenName: "Name_245", img: "1111", quality: 6, category: 5, mmNum: 5 }, 60006: { prototype: 60006, tokenName: "Name_246", img: "1111", quality: 6, category: 5, mmNum: 5 } }