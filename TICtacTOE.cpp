#include<bits/stdc++.h>
using namespace std;
char square[10]={'0','1','2','3','4','5','6','7','8','9'};
void box();
int checkWin();
int val(int temp);
int main(){
    cout<<"TIC TAC TOE"<<endl;
    int i=1;
    box();
    int ch;
    int t=0;
    while( i==1){
        cout<<"Player 1 enter your choice: ";
        t++;
        cin>>ch;
        i=val(ch);
        if(i==4){
        continue;
        }
        square[ch]='X';
        box();
        i=checkWin();
        if(i==2 || i==3){
        continue;
        }
        cout<<"Player 2 enter your choice: ";
        t++;
        cin>>ch;
        i=val(ch);
        if(i==4){
            continue;
        }
        square[ch]='O';
        box();
        i=checkWin();
        if(i==2 || i==3){
            continue;
        }
    }
    if(i==4){
        cout<<"Are you even serious or what man???"<<endl;
        cout<<"Game Over!!";
    }
    else if(i==2){
        if(t%2==0){
            cout<<"Player 2 WON!!"<<endl;
        }
        else{
            cout<<"Player 1 WON!!"<<endl;
        }
        cout<<"Congratulations!!"<<endl;
    }
    else{
        cout<<"Match Drawn you two FOOLS!!"<<endl;
        cout<<"Use brains next time "<<endl;
    }
}
int val(int temp){
    if(square[temp]=='X' || square[temp]=='O' || temp<1 || temp>9){
            cout<<"Invalid move"<<endl;
            return 4;
        }
        else{
            return 1;
        }
}
int checkWin(){
 if(square[1]==square[2] && square[2]==square[3]){
     return 2;   //return 2 for win cases
 }
 else if(square[4]==square[5] && square[5]==square[6]){
     return 2;   
 } 
 else if(square[7]==square[8] && square[8]==square[9]){
     return 2;   
 } 
 else if(square[1]==square[4] && square[4]==square[7]){
     return 2;   
 } 
 else if(square[2]==square[5] && square[5]==square[8]){
     return 2;   
 } 
 else if(square[3]==square[6] && square[6]==square[9]){
     return 2;   
 } 
 else if(square[1]==square[5] && square[5]==square[9]){
     return 2;   
 } 
 else if(square[3]==square[5] && square[5]==square[7]){
     return 2;   
 } 
 else if(square[1]!='1' && square[2]!='2' && square[3]!='3' && square[4]!='4' &&square[5]!='5' && square[6]!='6' && square[7]!='7' && square[8]!='8' && square[9]!='9'){
     return 3; //return 3 when the game is draw
 }
 else{
     return 1; // return 1 when the game has to be continued
 }

}
void box(){
 cout<<"PLAYER 1 IS X"<<endl;
 cout<<"PLAYER 2 IS O"<<endl;   
 cout<<"NOTE- An Invalid move will end the game."<<endl;
 cout<< "     |     |     " <<endl;
 cout<< "  "<<square[1]<<"  |  "<<square[2]<<"  |  "<<square[3]<<"  " <<endl;
 cout<< "_____|_____|_____" <<endl;
 cout<< "     |     |     " <<endl;
 cout<< "  "<<square[4]<<"  |  "<<square[5]<<"  |  "<<square[6]<<"  " <<endl;
 cout<< "_____|_____|_____" <<endl;
 cout<< "     |     |     " <<endl;
 cout<< "  "<<square[7]<<"  |  "<<square[8]<<"  |  "<<square[9]<<"  " <<endl;
 cout<< "     |     |     " <<endl;
}
