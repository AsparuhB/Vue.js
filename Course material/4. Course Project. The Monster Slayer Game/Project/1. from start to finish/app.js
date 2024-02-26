const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      battleLog: [],
      hasSpecialAttack: true,
      hasSurrendered: false,
      showLog: false,
    };
  },
  computed: {
    playerHealthBar() {
      return { width: this.playerHealth + '%' };
    },
    monsterHealthBar() {
      return { width: this.monsterHealth + '%' };
    },
  },
  methods: {
    attackMonster() {
      const damage = Math.floor(Math.random() * 10);
      this.monsterHealth -= damage;
      this.addLog('Player', 'attacks', damage);
      this.attackPlayer();
      console.log(this.battleLog);
      console.log(this.playerHealth);
    },
    attackPlayer() {
      const damage = Math.floor(Math.random() * 10);
      this.playerHealth -= damage;
      this.addLog('Monster', 'attacks', damage);
    },
    specialAttack() {
      const damage = Math.floor(Math.random() * 15);
      this.monsterHealth -= damage;
      this.addLog('Player', 'special attacks', damage);
      this.attackPlayer();
      this.hasSpecialAttack = false;
    },
    addLog(who, what, value) {
      this.battleLog.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
    healPlayer() {
      const heal = Math.floor(Math.random() * 10);
      this.playerHealth += heal;
      this.addLog('Player', 'heal', heal);
      this.attackPlayer();
    },

    surrender() {
      (this.hasSurrendered = true),
        (this.playerHealth = 0),
        this.addLog('player', 'surrender', 0);
    },
    resetGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.battleLog = [];
      this.hasSpecialAttack = true;
      this.hasSurrendered = false;
    },
    showBattleLog() {
      this.showLog = !this.showLog;
      console.log(this.showLog);
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0) {
        this.playerHealth = 0;
        if (confirm('You lost! New Game?')) {
          this.playerHealth = 100;
          this.monsterHealth = 100;
          this.battleLog = [];
          this.hasSpecialAttack = true;
          this.hasSurrendered = false;
        }
      }
    },
    monsterHealth(value) {
      if (value <= 0) {
        this.monsterHealth = 0;
        if (confirm('You won! New Game?')) {
          this.playerHealth = 100;
          this.monsterHealth = 100;
          this.battleLog = [];
          this.hasSpecialAttack = true;
          this.hasSurrendered = false;
        }
      }
    },
  },
});

app.mount('#game');
