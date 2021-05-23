// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, array) => {
  return {
    specimenNum: num,
    dna: array,
    mutate() {
      let randomBase = [Math.floor(Math.random() * this.dna.length)];
      let randomBaseActual = this.dna[randomBase];
      let changedBase = returnRandBase();
      while (randomBaseActual === changedBase) {
        changedBase = returnRandBase();
      }
      this.dna[randomBase] = changedBase;
    },
    compareDNA(obj) {
      let count = 0;
      for (let i = 0; i < 15; i++) {
        let j = obj.dna[i];
        let k = this.dna[i];
        if (j === k) {
          count++;
        }
      }
      let percentSame = (count / 15) * 100;
      console.log(
        `Specimen ${this.specimenNum} and specimen ${
          obj.specimenNum
        } have ${percentSame.toFixed(0)}% DNA in common`
      );
    },
    willLikelySurvive() {
      let count = 0;
      for (let i = 0; i < 15; i++) {
        if (this.dna[i] === "C" || this.dna[i] === "G") {
          count++;
        }
      }
      let percentage = count / 15;
      if (percentage < 0.6) {
        return false;
      } else {
        return true;
      }
    },
  };
};
let pAequorInstances = [];
for (let i = 0; i < 30; i++) {
  pAequorInstances.push(pAequorFactory(i, mockUpStrand()));
  console.log(pAequorInstances[i].specimenNum);
  console.log(pAequorInstances[i].dna);
  console.log(pAequorInstances[i].willLikelySurvive());
  console.log("\n");
}
