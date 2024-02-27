function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      healCounter: 2,
      hasHeals: true,
      hasSurrendered: false,
      gameOver: false,
      battleLog: [],
      showBattleLog: false,
    };
  },
  computed: {
    playerHealthBar() {
      if (this.playerHealth < 0) {
        return { width: '0%' };
      }
      return { width: this.playerHealth + '%' };
    },
    monsterHealthBar() {
      if (this.monsterHealth < 0) {
        return { width: '0%' };
      }
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
      this.addLogMessage('player', 'attack', damage);
      this.attackPlayer();
    },
    attackPlayer() {
      const damage = getRandomValue(8, 15);
      this.playerHealth -= damage;
      this.addLogMessage('monster', 'attack', damage);
    },
    playerSpecialAttack() {
      this.currentRound++;
      if (this.currentRound % 3 !== 0) {
        const damage = getRandomValue(10, 25);
        this.monsterHealth -= damage;
        this.addLogMessage('player', 'special-attack', damage);
        this.attackPlayer();
      }
    },
    playerHeal() {
      this.currentRound++;
      const healValue = getRandomValue(10, 30);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.healCounter -= 1;
      if (this.healCounter === 0) {
        this.hasHeals = false;
      }
      this.addLogMessage('player', 'heal', healValue);

      this.attackPlayer();
    },
    gameReset() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.hasHealed = false;
      this.currentRound = 0;
      this.hasHeals = true;
      this.winner = null;
      this.healCounter = 2;
      this.battleLog = [];
    },
    surrender() {
      this.winner = 'monster';
    },
    addLogMessage(who, what, value) {
      this.battleLog.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.value = 0;
        this.monsterHealth = 0;
        this.winner = 'draw';
      } else if (value <= 0) {
        this.value = 0;
        this.winner = 'monster';
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.value = 0;
        this.playerHealth = 0;
        this.winner = 'draw';
      } else if (value <= 0) {
        this.value = 0;
        this.winner = 'player';
      }
    },
  },
});

app.mount('#game');
