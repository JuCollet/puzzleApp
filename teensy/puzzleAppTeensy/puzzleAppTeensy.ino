const int l1 = 13;
const int l2 = 10;
const int l3 = 9;
const int l4 = 8;
const int l5 = 11;
const int leds[] = {l1,l2,l3,l4,l5};
int objet = 0;
int count = 0;
int count2 = 0;

void setup() {

  pinMode(A0, INPUT);
  pinMode(l1, OUTPUT);
  pinMode(l2, OUTPUT);
  pinMode(l3, OUTPUT);
  pinMode(l4, OUTPUT);
  pinMode(l5, OUTPUT);
  Keyboard.begin();
  Serial.begin(9600);

};

void loop() {
   
objet = analogRead(A0);

  if(count == 3){
      digitalWrite(leds[count2], HIGH);
      if(leds[count2-1])
      digitalWrite(leds[count2-1], LOW);
      count = 0;
      if(count2 == 5)
      count2 = 0;
      else
      count2++;
  }
  
  if(analogRead(A0) < 900){
    Serial.println("Objet détecté");
    Serial.println(analogRead(A0));
    signal();
  } else {
    Serial.println(analogRead(A0));
  };

  count++;
  delay(100);
  
};


void signal(){
  for(int i = 0;i<6;i++){
    digitalWrite(8, HIGH);
    digitalWrite(9, HIGH);
    digitalWrite(10, HIGH);
    digitalWrite(11, HIGH);
    digitalWrite(13, HIGH);
    delay(i*50);
    digitalWrite(8, LOW);
    digitalWrite(9, LOW);
    digitalWrite(10, LOW);
    digitalWrite(11, LOW);
    digitalWrite(13, LOW);
    delay(i*75);
  };
  
  Keyboard.write(85);
  delay(1250);
  count=0;
  count2=0;
  
};


