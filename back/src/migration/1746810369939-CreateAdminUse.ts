import {getRepository, MigrationInterface, QueryRunner} from 'typeorm';
import {User} from '../entity/User';

export class CreateAdminUse1746810369939 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
       const user = new User();
       user.username = 'medx';
       user.password = 'admin@123';
       user.hashPassword();
       user.role = 'ADMIN';
       const userRepository = getRepository(User);
       await userRepository.save(user);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
