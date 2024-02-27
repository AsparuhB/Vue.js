function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      // Defining the data needed for the game
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
    // monitoring and changing the player / monster health bars
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
    // player attacking the monster functionality
    attackMonster() {
      this.currentRound++;
      const damage = getRandomValue(5, 12);
      this.monsterHealth -= damage;
      this.addLogMessage('player', 'attack', damage);
      this.attackPlayer();
    },
    // the monster attacking back functionality
    attackPlayer() {
      const damage = getRandomValue(8, 15);
      this.playerHealth -= damage;
      this.addLogMessage('monster', 'attack', damage);
    },
    // adding a special attack functionality
    playerSpecialAttack() {
      this.currentRound++;
      if (this.currentRound % 3 !== 0) {
        const damage = getRandomValue(10, 25);
        this.monsterHealth -= damage;
        this.addLogMessage('player', 'attack', damage);
        this.attackPlayer();
      }
    },
    // adding healing functionality with a limited number of heals included
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
    // adding a reset game functionality.
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
    // adding a surrender functionality.
    surrender() {
      this.winner = 'monster';
    },
    // adding messages to the battle log.
    addLogMessage(who, what, value) {
      this.battleLog.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
  /* adding watchers to monitor the health and act accordingly with if statements 
   so that we see if we won, lost or is a draw.*/
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
