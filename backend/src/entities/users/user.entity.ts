import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";
import { Exclude } from "class-transformer";

import { ContantInformation } from "../contantInformation/contantInformation.entity";

@Entity("users")
export class Users {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ name: "full_name" })
  fullName: string;

  @Exclude()
  @Column()
  password: string;

  @OneToMany(
    () => ContantInformation,
    (contantInformation) => contantInformation.users,
    { eager: true }
  )
  contantInformation: ContantInformation;

  @Column({ name: "is_active", default: true })
  isActive: boolean;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "update_at" })
  updatedAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
