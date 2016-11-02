import { AngularFire, FirebaseListObservable } from 'angularfire2';

export class Db {
    list;
    constructor(private af: AngularFire) {
        const name: FirebaseListObservable<any> = af.database.list('/list');
        name.subscribe(
            val => {console.log(val);
            this.list = val;
            }
        );
        // name.push(this.newTask); // working fine
        // name.push({
        //   name: this.newTask,
        //   pushedby: 'anny'
        // }); // newTask undefined qk ngmodel hai wo

        name.push({
          name: 'anny',
          age: '21'
        });

        // name.remove('name');
    }
}