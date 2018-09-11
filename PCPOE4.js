//Candidate names
let cA = "CandidateA";
let cB = "CandidateB";
let cC = "CandidateC";
let cD = "CandidateD";
let nCandidates = 4;
let aRemaining = true;
let bRemaining = true;
let cRemaining = true;
let dRemaining = true;

//Round 1 Potential Ballots (amounts of each ballot)
let nABCD = 6;
let nABDC = 0;
let nACBD = 0;
let nACDB = 0;
let nADBC = 0;
let nADCB = 0;

let nBACD = 0;
let nBADC = 0;
let nBCAD = 0;
let nBCDA = 0;
let nBDAC = 0;
let nBDCA = 0;

let nCABD = 0;
let nCADB = 0;
let nCBAD = 0;
let nCBDA = 0;
let nCDAB = 0;
let nCDBA = 0;

let nDABC = 0;
let nDACB = 0;
let nDBAC = 0;
let nDBCA = 0;
let nDCAB = 0;
let nDCBA = 0;
numberOfVoters = (nABCD+nABDC+nACBD+nACDB+nADBC+nADCB+nBACD+nBADC+nBCAD+nBCDA+nBDAC+nBDCA+nCABD+nCADB+nCBAD+nCBDA+nCDAB+nCDBA+nDABC+nDACB+nDBAC+nDBCA+nDCAB+nDCBA);



// Round 2 potential ballots

//If A gets eliminated first
let nBCD = 0;
let nBDC = 0;
let nCBD = 0;
let nCDB = 0;
let nDBC = 0;
let nDCB = 0;

//If B gets eliminated first
let nACD = 0;
let nADC = 0;
let nCAD = 0;
let nCDA = 0;
let nDAC = 0;
let nDCA = 0;

//If C gets eliminated first
let nABD = 0;
let nADB = 0;
let nBAD = 0;
let nBDA = 0;
let nDAB = 0;
let nDBA = 0;

//If D gets eliminated first
let nABC = 0;
let nACB = 0;
let nBAC = 0;
let nBCA = 0;
let nCAB = 0;
let nCBA = 0;


//Semifinals
let nAB = 0;
let nAC = 0;
let nAD = 0;
let nBA = 0;
let nBC = 0;
let nBD = 0;
let nCA = 0;
let nCB = 0;
let nCD = 0;
let nDA = 0;
let nDB = 0;
let nDC = 0;


//Final result
let nA = 0;
let nB = 0;
let nC = 0;
let nD = 0;



//Round 1 Potential Ballots (Calculations [for A, for B, for C, for D]
let ABCD = [3 / 3, 2 / 3, 1 / 3, 0];
let ABDC = [3 / 3, 2 / 3, 0, 1 / 3];
let ACBD = [3 / 3, 1 / 3, 2 / 3, 0];
let ACDB = [3 / 3, 0, 2 / 3, 1 / 3];
let ADBC = [3 / 3, 1 / 3, 0, 2 / 3];
let ADCB = [3 / 3, 0, 1 / 3, 2 / 3];

let BACD = [2 / 3, 3 / 3, 1 / 3, 0];
let BADC = [2 / 3, 3 / 3, 0, 1 / 3];
let BCAD = [1 / 3, 3 / 3, 2 / 3, 0];
let BCDA = [0, 3 / 3, 2 / 3, 1 / 3];
let BDAC = [1 / 3, 3 / 3, 0, 2 / 3];
let BDCA = [0, 3 / 3, 1 / 3, 2 / 3];

let CABD = [2 / 3, 1 / 3, 3 / 3, 0];
let CADB = [2 / 3, 0, 3 / 3, 1 / 3];
let CBAD = [1 / 3, 2 / 3, 3 / 3, 0];
let CBDA = [0, 2 / 3, 3 / 3, 1 / 3];
let CDAB = [1 / 3, 0, 3 / 3, 2 / 3];
let CDBA = [0, 1 / 3, 3 / 3, 2 / 3];

let DABC = [2 / 3, 1 / 3, 0, 3 / 3];
let DACB = [2 / 3, 0, 1 / 3, 3 / 3];
let DBAC = [1 / 3, 2 / 3, 0, 3 / 3];
let DBCA = [0, 2 / 3, 1 / 3, 3 / 3];
let DCAB = [1 / 3, 0, 2 / 3, 3 / 3];
let DCBA = [0, 1 / 3, 2 / 3, 3 / 3];


//Round 2 potential ballot calculations

//If A gets eliminated first
let BCD = [0, 2 / 2, 1 / 2, 0];
let BDC = [0, 2 / 2, 0, 1 / 2];
let CBD = [0, 1 / 2, 2 / 2, 0];
let CDB = [0, 0, 2 / 2, 1 / 2];
let DBC = [0, 1 / 2, 0, 2 / 2];
let DCB = [0, 0, 1 / 2, 2 / 2];

//If B gets eliminated first
let ACD = [2 / 2, 0, 1 / 2, 0];
let ADC = [2 / 2, 0, 0, 1 / 2];
let CAD = [1 / 2, 0, 2 / 2, 0];
let CDA = [0, 0, 2 / 2, 1 / 2];
let DAC = [1 / 2, 0, 0, 2 / 2];
let DCA = [0, 0, 1 / 2, 2 / 2];

//If C gets eliminated first
let ABD = [2 / 2, 1 / 2, 0, 0];
let ADB = [2 / 2, 0, 0, 1 / 2];
let BAD = [1 / 2, 2 / 2, 0, 0];
let BDA = [0, 2 / 2, 0, 1 / 2];
let DAB = [1 / 2, 0, 0, 2 / 2];
let DBA = [0, 1 / 2, 0, 2 / 2];

//If D gets eliminated first
let ABC = [2 / 2, 1 / 2, 0, 0];
let ACB = [2 / 2, 0, 1 / 2, 0];
let BAC = [1 / 2, 2 / 2, 0, 0];
let BCA = [0, 2 / 2, 1 / 2, 0];
let CAB = [1 / 2, 0, 2 / 2, 0];
let CBA = [0, 1 / 2, 2 / 2, 0];


//Semifinals ballot calculations
let AB = [1, 0, 0, 0];
let AC = [1, 0, 0, 0];
let AD = [1, 0, 0, 0];
let BA = [0, 1, 0, 0];
let BC = [0, 1, 0, 0];
let BD = [0, 1, 0, 0];
let CA = [0, 0, 1, 0];
let CB = [0, 0, 1, 0];
let CD = [0, 0, 1, 0];
let DA = [0, 0, 0, 1];
let DB = [0, 0, 0, 1];
let DC = [0, 0, 0, 1];


//Final result
let A = [1, 0, 0, 0];
let B = [0, 1, 0, 0];
let C = [0, 0, 1, 0];
let D = [0, 0, 0, 1];

let i = 0;
//variables are set



//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!
//Your code here. Tally ballots however you choose!



// Time to calculate the actual votes.
let voteTallyRound1 = [0, 0, 0, 0]
for (i = 0; i < nCandidates; i++) {
    voteTallyRound1[i] =
        (ABCD[i] *= nABCD) +
        (ABDC[i] *= nABDC) +
        (ACBD[i] *= nACBD) +
        (ACDB[i] *= nACDB) +
        (ADBC[i] *= nADBC) +
        (ADCB[i] *= nADCB) +

        (BACD[i] *= nBACD) +
        (BADC[i] *= nBADC) +
        (BCAD[i] *= nBCAD) +
        (BCDA[i] *= nBCDA) +
        (BDAC[i] *= nBDAC) +
        (BDCA[i] *= nBDCA) +

        (CABD[i] *= nCABD) +
        (CADB[i] *= nCADB) +
        (CBAD[i] *= nCBAD) +
        (CBDA[i] *= nCBDA) +
        (CDAB[i] *= nCDAB) +
        (CDBA[i] *= nCDBA) +

        (DABC[i] *= nDABC) +
        (DACB[i] *= nDACB) +
        (DBAC[i] *= nDBAC) +
        (DBCA[i] *= nDBCA) +
        (DCAB[i] *= nDCAB) +
        (DCBA[i] *= nDCBA);
}
let a1 = voteTallyRound1[0];
let b1 = voteTallyRound1[1];
let c1 = voteTallyRound1[2];
let d1 = voteTallyRound1[3];
//Print results
console.log(cA + " got " + a1 + " votes in Round 1!");
console.log(cB + " got " + b1 + " votes in Round 1!");
console.log(cC + " got " + c1 + " votes in Round 1!");
console.log(cD + " got " + d1 + " votes in Round 1!");
console.log("");

//Who gets eliminated?
if (a1 < b1 && a1 < c1 && a1 < d1) {
    console.log(cA + " is eliminated! But don't be discouraged. At least your family loves you.");
    console.log("");
    console.log("");
    aRemaining = false;
    nCandidates--;
}
else if (b1 < a1 && b1 < c1 && b1 < d1) {
    console.log(cB + "is eliminated! At least you made it to Round 1.");
    console.log("");
    console.log("");
    bRemaining = false;
    nCandidates--;
    }
else if (c1 < a1 && c1 < b1 && c1 < d1) {
    console.log(cC + " is eliminated! That's 2 years of your life you'll never get back.")
    console.log("");
    console.log("");
    cRemaining = false;
    nCandidates--;
    }
else if (d1 < a1 && d1 < b1 && d1 < c1) {
    console.log(cD + " is eliminated! At least you didn't finish 3rd. Nobody ever remembers the 3rd place guy. Only the 1st, 2nd, and last place guys get remembered.");
    console.log("");
    console.log("");
    dRemaining = false;
    nCandidates--;
    }
else {
    console.log("Considering that there are " + (numberOfVoters) + " voters this round, and the fact that votes could split into " + (nCandidates - 1) + "ths of votes, I can only assume that a number of candidates tied on purpose... Did you do this just to make my job difficult? Did you think you could outsmart the system? You arrogant fool. I never leave any loopholes in my software. Ever~ ^_~")
    console.log("");
    if (a1 > b1 && b1 === c1 && c1 === d1) {
        console.log(cB + ", " + cC + ", and " + cD + " all tied for last place. Run a mock election wherein " + cA + " has already been eliminated, in order to allow " + cB + ", "); 
        //Finaish later
    }
}
//Finish later
//Finish later
//Finish later


if (aRemaining === false) {
    nBCD = (nABCD + nBACD + nBCAD + nBCDA);
    nBDC = (nABDC + nBADC + nBDAC + nBDCA);
    nCBD = (nACBD + nCABD + nCBAD + nCBDA);
    nCDB = (nACDB + nCADB + nCDAB + nCDBA);
    nDBC = (nADBC + nDABC + nDBAC + nDBCA);
    nDCB = (nADCB + nDACB + nDCAB + nDCBA);

    let voteTallyRound2 = [0, 0, 0, 0];

    for (i=0; i<nCandidates; i++) {
        voteTallyRound2[i] =
            (BCD[i] *= nBCD) +
            (BDC[i] *= nBDC) +
            (CBD[i] *= nCBD) +
            (CDB[i] *= nCDB) +
            (DBC[i] *= nDBC) +
            (DCB[i] *= nDCB);   
    }
    let a2;
    let b2 = voteTallyRound2[1];
    let c2 = voteTallyRound2[2];
    let d2 = voteTallyRound1[3];
        console.log(cB + " got " + b2 + " votes in Round 2!");
        console.log(cC + " got " + c2 + " votes in Round 2!");
        console.log(cD + " got " + d2 + " votes in Round 2!");
        console.log("");
            
    //Who gets eliminated?
    if (b2 < c2 && b2 < d2) {
        console.log(cB + " is eliminated! Don't worry about going down in history as coming in next-to-last place. Nobody ever remembers the third-place finisher.");
        console.log("");
        console.log("");
        let bRemaining = false;
        nCandidates--;
    }
    else if (c2 < b2 && c2 < d2) {
        console.log(cC + " is eliminated! Don't worry about going down in history as coming in next-to-last place. Nobody ever remembers the third-place finisher.");
        console.log("");
        console.log("");
        let cRemaining = false;
        nCandidates--;
    }
    else if (d2 < b2 && d2 < c2) {
        console.log(cD + " is eliminated! Don't worry about going down in history as coming in next-to-last place. Nobody ever remembers the third-place finisher.");
        console.log("");
        console.log("");
        let dRemaining = false;
        nCandidates--;
    }
    else {console.log("There was a tie for last place.");
    console.log("");
    console.log("");
    }   

    if (bRemaining === false) {
        nCD = (nBCD + nCBD + nCDB);
        nDC = (nBDC + nDBC + nDCB);
console.log("test");
        let voteTallyRound3 = [0, 0, 0, 0];

        for (i = 0; i < nCandidates; i++) {
            voteTallyRound3[i] =
            (CD[i] *= nCD) +
            (DC[i] *= nDC);
        }

        let a3;
        let b3;
        let c3 = voteTallyRound3[2];
        let d3 = voteTallyRound3[3];
            console.log(cC + " got " + c3 + " votes in Round 3!");
            console.log(cD + " got " + d3 + " votes in Round 3!");
            console.log("");

        if (c3 < d3) {
            console.log(cD + " wins!!");
            let cRemaining = false;
            nCandidates--;
        }
        else if (d3 < c3) {
            console.log(cC + " wins!!");
            let dRemaining = false;
            nCandidates--;
        }
        else {
            console.log(cC + " and " + cD + " tied for first place.");
        }
    }


    if (cRemaining === false)
        nBD = (nCBD + nBCD + nBDC);
        nDB = (nCDB + nDCB + nDBC);

        let voteTallyRound3 = [0, 0, 0, 0];

        for (i = 0; i < nCandidates; i++) {
            voteTallyRound3[i] =
            (BD[i] *= nBD) +
            (DB[i] *= nDB);
        }

        let a3;
        let b3 = voteTallyRound3[1];
        let c3;
        let d3 = voteTallyRound3[3];
        console.log(cB + " got " + b3 + " votes in Round 3!");
        console.log(cD + " got " + d3 + " votes in Round 3!");
        console.log("");

        if (b3 < d3) {
            console.log(cD + " wins!!");
            nCandidates--;
            let bRemaining = false;
        }
        else if (d3 < b3) {
            console.log(cB + " wins!!");
            nCandidates--;
            let dRemaining = false;
        }
        else {
            console.log(cB + " and " + cD + " tied for first place.");
        }

    if (dRemaining === false){
        nBC = (nDBC + nBDC + nBCD);
        nCB = (nDCB + nCDB + nCBD);

        let voteTallyRound3 = [0, 0, 0, 0];

        for (i = 0; i < nCandidates; i++) {
            voteTallyRound3[i] =
            (BC[i] *= nBC) +
            (CB[i] *= nCB);
        }

        let a3;
        let b3 = voteTallyRound3[1];
        let c3 = voteTallyRound3[2];
        let d3;
        console.log(cB + " got " + b3 + " votes in Round 3!");
        console.log(cC + " got " + c3 + " votes in Round 3!");
        console.log("");

        if (b3 < c3) {
            console.log(cC + " wins!!");
            let bRemaining = false;
            nCandidates--;
        }
        else if (c3 < b3) {
            console.log(cB + " wins!!");
            let cRemaining = false;
            nCandidates--;
        }
        else {
            console.log(cB + " and " + cC + " tied for first place.");
        }
    }
}
//If A gets Eliminated is finished
//If A gets Eliminated is finished
//If A gets Eliminated is finished
//If A gets Eliminated is finished
//If A gets Eliminated is finished


else if (bRemaining === false) {
    nACD = (nBACD + nABCD + nACBD + nACDB);
    nADC = (nBADC + nABDC + nADBC + nADCB);
    nCAD = (nBCAD + nCBAD + nCABD + nCADB);
    nCDA = (nBCDA + nCBDA + nCDBA + nCDAB);
    nDAC = (nBDAC + nDBAC + nDABC + nDACB);
    nDCA = (nBDCA + nDBCA + nDCBA + nDCAB);

    let voteTallyRound2 = [0, 0, 0, 0];

    for (i=0; i<nCandidates; i++) {
        voteTallyRound2[i] =
            (ACD[i] *= nACD) +
            (ADC[i] *= nADC) +
            (CAD[i] *= nCAD) +
            (CDA[i] *= nCDA) +
            (DAC[i] *= nDAC) +
            (DCA[i] *= nDCA);    }

        let a2 = voteTallyRound2[0];
        let b2
        let c2 = voteTallyRound2[2];
        let d2 = voteTallyRound1[3];
        console.log(cA + " got " + a2 + " votes in Round 2!");
        console.log(cC + " got " + c2 + " votes in Round 2!");
        console.log(cD + " got " + d2 + " votes in Round 2!");
        console.log("");
            
    //Who gets eliminated?
    if (a2 < c2 && a2 < d2) {
        console.log(cA + " is eliminated! Don't worry about going down in history as coming in next-to-last place. Nobody ever remembers the third-place finisher.");
        console.log("");
        console.log("");
        let aRemaining = false;
        nCandidates--;
    }
    else if (c2 < a2 && c2 < d2) {
        console.log(cC + " is eliminated! Don't worry about going down in history as coming in next-to-last place. Nobody ever remembers the third-place finisher.");
        console.log("");
        console.log("");
        let cRemaining = false;
        nCandidates--;
    }
    else if (d2 < a2 && d2 < c2) {
        console.log(cD + " is eliminated! Don't worry about going down in history as coming in next-to-last place. Nobody ever remembers the third-place finisher.");
        console.log("");
        console.log("");
        let dRemaining = false;
        nCandidates--;
    }
    else console.log("There was a tie for last place.");

    if (aRemaining === false) {
        nCD = (nACD + nCAD + nCDA);
        nDC = (nADC + nDAC + nDCA);

        let voteTallyRound3 = [0, 0, 0, 0];

        for (i = 0; i < nCandidates; i++) {
            voteTallyRound3[i] =
            (CD[i] *= nCD) +
            (DC[i] *= nDC);
        }
            let a3;
            let b3;
            let c3 = voteTallyRound3[2];
            let d3 = voteTallyRound3[3];
            console.log(cC + " got " + c3 + " votes in Round 3!");
            console.log(cD + " got " + d3 + " votes in Round 3!");
            console.log("");

        if (c3 < d3) {
            console.log(cD + " wins!!");
            let cRemaining = false;
            nCandidates--;
        }
        else if (d3 < c3) {
            console.log(cC + " wins!!");
            let dRemaining = false;
            nCandidates--;
        }
        else {
            console.log(cC + " and " + cD + " tied for first place.");
        }
    }


    if (cRemaining === false)
        nAD = (nCAD + nACD + nADC);
        nDA = (nCDA + nDCA + nDAC);

        let voteTallyRound3 = [0, 0, 0, 0];

        for (i = 0; i < nCandidates; i++) {
            voteTallyRound3[i] =
            (AD[i] *= nAD) +
            (DA[i] *= nDA);
        }

        let a3 = voteTallyRound3[0];
        let b3;
        let c3;
        let d3 = voteTallyRound3[3];
        console.log(cA + " got " + a3 + " votes in Round 3!");
        console.log(cD + " got " + d3 + " votes in Round 3!");
        console.log("");

        if (a3 < d3) {
            console.log(cD + " wins!!");
            nCandidates--;
            let aRemaining = false;
        }
        else if (d3 < a3) {
            console.log(cA + " wins!!");
            nCandidates--;
            let dRemaining = false;
        }
        else {
            console.log(cA + " and " + cD + " tied for first place.");
        }

    if (dRemaining === false){
        nAC = (nDAC + nADC + nACD);
        nCA = (nDCA + nCDA + nCAD);

        let voteTallyRound3 = [0, 0, 0, 0];

        for (i = 0; i < nCandidates; i++) {
            voteTallyRound3[i] =
            (AC[i] *= nAC) +
            (CA[i] *= nCA);
        }

        let a3 = voteTallyRound3[0];
        let b3;
        let c3 = voteTallyRound3[2];
        let d3;
        console.log(cA + " got " + a3 + " votes in Round 3!");
        console.log(cC + " got " + c3 + " votes in Round 3!");
        console.log("");

        if (a3 < c3) {
            console.log(cC + " wins!!");
            let aRemaining = false;
            nCandidates--;
        }
        else if (c3 < a3) {
            console.log(cA + " wins!!");
            let cRemaining = false;
            nCandidates--;
        }
        else {
            console.log(cA + " and " + cC + " tied for first place.");
        }
    }
}
//If B is eliminated is finished
//If B is eliminated is finished
//If B is eliminated is finished
//If B is eliminated is finished
//If B is eliminated is finished


else if (cRemaining === false) {
    nABD = (nCABD + nACBD + nABCD + nABDC);
    nADB = (nCADB + nACDB + nADCB + nADBC);
    nBAD = (nCBAD + nBCAD + nBACD + nBADC);
    nBDA = (nCBDA + nBCDA + nBDCA + nBDAC);
    nDAB = (nCDAB + nDCAB + nDACB + nDABC);
    nDBA = (nCDBA + nDCBA + nDBCA + nDBAC);

    let voteTallyRound2 = [0, 0, 0, 0];

    for (i=0; i<nCandidates; i++) {
        voteTallyRound2[i] =
            (ABD[i] *= nABD) +
            (ADB[i] *= nADB) +
            (BAD[i] *= nBAD) +
            (BDA[i] *= nBDA) +
            (DAB[i] *= nDAB) +
            (DBA[i] *= nDBA);  
    }
    let a2 = voteTallyRound2[0];
    let b2 = voteTallyRound2[1];
    let c2;
    let d2 = voteTallyRound2[3];
        console.log(cA + " got " + a2 + " votes in Round 2!");
        console.log(cB + " got " + b2 + " votes in Round 2!");
        console.log(cD + " got " + d2 + " votes in Round 2!");
        console.log("");
            
    //Who gets eliminated?
    if (a2 < b2 && a2 < d2) {
        console.log(cA + " is eliminated! Don't worry about going down in history as coming in next-to-last place. Nobody ever remembers the third-place finisher.");
        console.log("");
        console.log("");
        let aRemaining = false;
        nCandidates--;
    }
    else if (b2 < a2 && b2 < d2) {
        console.log(cB + " is eliminated! Don't worry about going down in history as coming in next-to-last place. Nobody ever remembers the third-place finisher.");
        console.log("");
        console.log("");
        let bRemaining = false;
        nCandidates--;
    }
    else if (d2 < a2 && d2 < b2) {
        console.log(cD + " is eliminated! Don't worry about going down in history as coming in next-to-last place. Nobody ever remembers the third-place finisher.");
        console.log("");
        console.log("");
        let dRemaining = false;
        nCandidates--;
    }
    else console.log("There was a tie for last place.");

    if (aRemaining === false) {
        nBD = (nABD + nBAD + nBDA);
        nDB = (nADB + nDAB + nDBA);

        let voteTallyRound3 = [0, 0, 0, 0];

        for (i = 0; i < nCandidates; i++) {
            voteTallyRound3[i] =
            (BD[i] *= nBD) +
            (DB[i] *= nDB);
        }

            let a3;
            let b3 = voteTallyRound3[1];
            let c3;
            let d3 = voteTallyRound3[3];
            console.log(cB + " got " + b3 + " votes in Round 3!");
            console.log(cD + " got " + d3 + " votes in Round 3!");
            console.log("");
    
        if (b3 < d3) {
            console.log(cD + " wins!!");
            let bRemaining = false;
            nCandidates--;
        }
        else if (d3 < b3) {
            console.log(cB + " wins!!");
            let dRemaining = false;
            nCandidates--;
        }
        else {
            console.log(cB + " and " + cD + " tied for first place.");
        }
    }

    if (bRemaining === false) {
        nAD = (nBAD + nABD + nADB);
        nDA = (nBDA + nDBA + nDAB);

        let voteTallyRound3 = [0, 0, 0, 0];

        for (i = 0; i < nCandidates; i++) {
            voteTallyRound3[i] =
            (AD[i] *= nAD) +
            (DA[i] *= nDA);
        }

        let a3 = voteTallyRound3[0];
        let b3;
        let c3;
        let d3 = voteTallyRound3[3];
        console.log(cA + " got " + a3 + " votes in Round 3!");
        console.log(cD + " got " + d3 + " votes in Round 3!");
        console.log("");

        if (a3 < d3) {
            console.log(cD + " wins!!");
            nCandidates--;
            let aRemaining = false;
        }
        else if (d3 < a3) {
            console.log(cA + " wins!!");
            nCandidates--;
            let dRemaining = false;
        }
        else {
            console.log(cA + " and " + cD + " tied for first place.");
        }
    }
    
    if (dRemaining === false) {
        nAB = (nDAB + nADB + nABD);
        nBA = (nDBA + nBDA + nBAD);

        let voteTallyRound3 = [0, 0, 0, 0];

        for (i = 0; i < nCandidates; i++) {
            voteTallyRound3[i] =
            (AB[i] *= nAB) +
            (BA[i] *= nBA);
        }
        let a3 = voteTallyRound3[0];
        let b3 = voteTallyRound3[1];
        let c3;
        let d3;
        console.log(cA + " got " + a3 + " votes in Round 3!");
        console.log(cB + " got " + b3 + " votes in Round 3!");
        console.log("");

        if (a3 < b3) {
            console.log(cB + " wins!!");
            let aRemaining = false;
            nCandidates--;
        }
        else if (b3 < a3) {
            console.log(cA + " wins!!");
            let bRemaining = false;
            nCandidates--;
        }
        else {
            console.log(cA + " and " + cB + " tied for first place.");
        }
    }
}
//If C gets eliminated is finished
//If C gets eliminated is finished
//If C gets eliminated is finished
//If C gets eliminated is finished
//If C gets eliminated is finished


else if (dRemaining === false) {
    nABC = (nDABC + nADBC + nABDC + nABCD);
    nACB = (nDACB + nADCB + nACDB + nACBD);
    nBAC = (nDBAC + nBDAC + nBADC + nBACD);
    nBCA = (nDBCA + nBDCA + nBCDA + nBCAD);
    nCAB = (nDCAB + nCDAB + nCADB + nCABD);
    nCBA = (nDCBA + nCDBA + nCBDA + nCBAD);

    let voteTallyRound2 = [0, 0, 0, 0];

    for (i=0; i<nCandidates; i++) {
        voteTallyRound2[i] =
            (ABC[i] *= nABC) +
            (ACB[i] *= nACB) +
            (BAC[i] *= nBAC) +
            (BCA[i] *= nBCA) +
            (CAB[i] *= nCAB) +
            (CBA[i] *= nCBA);  
    }

    let a2 = voteTallyRound2[0];
    let b2 = voteTallyRound2[1];
    let c2 = voteTallyRound2[2];
    let d2;

        console.log(cA + " got " + a2 + " votes in Round 2!");
        console.log(cB + " got " + b2 + " votes in Round 2!");
        console.log(cC + " got " + c2 + " votes in Round 2!");
        console.log("");
            
    //Who gets eliminated?
    if (a2 < b2 && a2 < c2) {
        console.log(cA + " is eliminated! Don't worry about going down in history as coming in next-to-last place. Nobody ever remembers the third-place finisher.");
        console.log("");
        console.log("");
        let aRemaining = false;
        nCandidates--;
    }
    else if (b2 < a2 && b2 < c2) {
        console.log(cB + " is eliminated! Don't worry about going down in history as coming in next-to-last place. Nobody ever remembers the third-place finisher.");
        console.log("");
        console.log("");
        let bRemaining = false;
        nCandidates--;
    }
    else if (c2 < a2 && c2 < b2) {
        console.log(cC + " is eliminated! Don't worry about going down in history as coming in next-to-last place. Nobody ever remembers the third-place finisher.");
        console.log("");
        console.log("");
        cRemaining = false;
        nCandidates--;
        console.log("test C gets eliminated");
    }
    else console.log("There was a tie for last place.");
console.log(cRemaining);
    if (aRemaining === false) {
        nBC = (nABC + nBAC + nBCA);
        nCB = (nACB + nCAB + nCBA);

        let voteTallyRound3 = [0, 0, 0, 0];
        let a3;
        let b3 = voteTallyRound3[1];
        let c3 = voteTallyRound3[2];
        let d3;

        for (i = 0; i < nCandidates; i++) {
            voteTallyRound3[i] =
            (BC[i] *= nBC) +
            (CB[i] *= nCB);
        }
            console.log(cB + " got " + b3 + " votes in Round 3!");
            console.log(cC + " got " + c3 + " votes in Round 3!");
            console.log("");

        if (b3 < c3) {
            console.log(cC + " wins!!");
            let bRemaining = false;
            nCandidates--;
        }
        else if (c3 < b3) {
            console.log(cB + " wins!!");
            let cRemaining = false;
            nCandidates--;
        }
        else {
            console.log(cB + " and " + cC + " tied for first place.");
        }
    }


    else if (bRemaining === false) {
        nAC = (nBAC + nABC + nACB);
        nCA = (nBCA + nCBA + nCAB);

        let voteTallyRound3 = [0, 0, 0, 0];

        for (i = 0; i < nCandidates; i++) {
            voteTallyRound3[i] =
            (AC[i] *= nAC) +
            (CA[i] *= nCA);
        }
        
        let a3 = voteTallyRound3[0];
        let b3;
        let c3 = voteTallyRound3[2];
        let d3;

        console.log(cA + " got " + a3 + " votes in Round 3!");
        console.log(cC + " got " + c3 + " votes in Round 3!");
        console.log("");

        if (a3 < c3) {
            console.log(cC + " wins!!");
            nCandidates--;
            let aRemaining = false;
        }
        else if (c3 < a3) {
            console.log(cA + " wins!!");
            nCandidates--;
            let cRemaining = false;
        }
        else {
            console.log(cA + " and " + cC + " tied for first place.");
        }
    }
    console.log(cRemaining);
    if (cRemaining === false) {
        let voteTallyRound3 = [0, 0, 0, 0];
        nAB = (nCAB + nACB + nABC);
        nBA = (nCBA + nBCA + nBAC);

        for (i = 0; i < nCandidates; i++) {
            voteTallyRound3[i] =
            (AB[i] *= nAB) +
            (BA[i] *= nBA);
        }
        
        let a3 = voteTallyRound3[0];
        let b3 = voteTallyRound3[1];
        let c3;
        let d3;

        console.log(cA + " got " + a3 + " votes in Round 3!");
        console.log(cB + " got " + b3 + " votes in Round 3!");
        console.log("");

        if (a3 < b3) {
            console.log(cB + " wins!!");
            let aRemaining = false;
            nCandidates--;
        }
        else if (b3 < a3) {
            console.log(cA + " wins!!");
            let bRemaining = false;
            nCandidates--;
        }
        else {
            console.log(cA + " and " + cB + " tied for first place.");
        }
    }
}
//If D gets eliminated is finished
//If D gets eliminated is finished
//If D gets eliminated is finished
//If D gets eliminated is finished
//If D gets eliminated is finished

