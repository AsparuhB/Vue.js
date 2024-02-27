function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      hasSpecialAttack: true,
      hasHealed: true,
    };
  },
  computed: {
    playerHealthBar() {
      return { width: this.playerHealth + '%' };
    },
    monsterHealthBar() {
      return { width: this.monsterHealth + '%' };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const damage = getRandomValue(5, 12);
      this.monsterHealth -= damage;
      this.attackPlayer();
    },
    attackPlayer() {
      const damage = getRandomValue(8, 15);
      this.playerHealth -= damage;
    },
    playerSpecialAttack() {
      this.currentRound++;
      if (this.currentRound % 3 !== 0) {
        const damage = getRandomValue(10, 25);
        this.monsterHealth -= damage;
        this.attackPlayer();
      }
    },
    playerHeal() {
      this.currentRound++;
      if (this.hasHealed) {
        const heal = getRandomValue(10, 20);
        this.playerHealth += heal;
        this.hasHealed = false;
        this.attackPlayer();
      }
    },
  },
});

app.mount('#game');
