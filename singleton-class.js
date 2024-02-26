class Config {
  start (){
    console.log('start')
  }
  end (){
    console.log('end')
  }
}

const config = new Config()

config.start();
Object.freeze(config);

config.end = () =>{ console.log('update')}

config.end();

