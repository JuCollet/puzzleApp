var pieceStart1 = '<svg',
    pieceStart2 = 'width="70px" height="70px">',
    u0 = '<path d="M43.941,10c-0.498,4.5-4.309,8-8.941,8s-8.443-3.5-8.941-8H10v13h11v13h28V23h11V10H43.941z"/>',
    u1 = '<path d="M45,10c0-5.523-4.477-10-10-10S25,4.477,25,10H10v13h11v13h28V23h11V10H45z"/>',
    u2 = '<polygon points="60,10 10,10 10,23 21,23 21,36 49,36 49,23 60,23 "/>',
    r0 = '<path d="M52,35c0-4.633,3.5-8.443,8-8.941V10H47v11H34v28h13v11h13V43.941C55.5,43.443,52,39.633,52,35z"/>',
    r1 = '<path d="M60,25V10H47v11H34v28h13v11h13V45c5.523,0,10-4.477,10-10S65.523,25,60,25z"/>',
    r2 = '<polygon points="60,60 60,10 47,10 47,21 34,21 34,49 47,49 47,60 "/>',
    b0 = '<path d="M49,47V34H21v13H10v13h16.059c0.498-4.5,4.309-8,8.941-8s8.443,3.5,8.941,8H60V47H49z"/>',
    b1 = '<path d="M49,47V34H21v13H10v13h15c0,5.523,4.477,10,10,10s10-4.477,10-10h15V47H49z"/>',
    b2 = '<polygon points="10,60 60,60 60,47 49,47 49,34 21,34 21,47 10,47 "/>',
    l0 = '<path d="M23,21V10H10v16.059c4.5,0.498,8,4.309,8,8.941s-3.5,8.443-8,8.941V60h13V49h13V21H23z"/>',
    l1 = '<path d="M23,21V10H10v15C4.477,25,0,29.477,0,35s4.477,10,10,10v15h13V49h13V21H23z"/>',
    l2 = '<polygon points="10,10 10,60 23,60 23,49 36,49 36,21 23,21 23,10 "/>',
    pieceForm = function(formCode){
      finalForm = "";
          switch (formCode[0]) {
            case 0:
              finalForm += u0;
              break;
            case 1:
              finalForm += u1;
              break;
            case 2:
              finalForm += u2;
              break;
          }
          switch (formCode[1]) {
            case 0:
              finalForm += r0;
              break;
            case 1:
              finalForm += r1;
              break;
            case 2:
              finalForm += r2;
              break;
          }
          switch (formCode[2]) {
            case 0:
              finalForm += b0;
              break;
            case 1:
              finalForm += b1;
              break;
            case 2:
              finalForm += b2;
              break;
          }
          switch (formCode[3]) {
            case 0:
              finalForm += l0;
              break;
            case 1:
              finalForm += l1;
              break;
            case 2:
              finalForm += l2;
              break;
          }
        return finalForm;
    },
    pieceEnd = '</svg>';
