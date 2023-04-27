from flask_sqlalchemy import SQLAlchemy, Model

class ModeloStandard(Model):

    def serializetwo(self):
        role = self.__dict__
        del role ["_sa_instance_state"]
        return role

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

db = SQLAlchemy(model_class = ModeloStandard)



class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    profile_information = db.Column(db.String(200), nullable=False)
    profile_picture = db.Column(db.String(150), nullable=False)
    roles_id = db.Column(db.Integer, db.ForeignKey('roles.id'), nullable =False)

    medical_record = db.relationship('Medical_record',  backref="user", uselist = False)
    # medical_appoinment = db.relationship(
    #     'Medical_appoinment',
    #     primaryjoin='User.id == Medical_appoinment.user_id',
    #     secondaryjoin='User.id == Medical_appoinment.doctor_id',
    #     secondary='medical_appoinment',
    #     backref='users'
    # )
    medical_appoinments = db.relationship('Medical_appoinment', foreign_keys='[Medical_appoinment.doctor_id]', backref='doctor')
    patient_appoinments = db.relationship('Medical_appoinment', foreign_keys='[Medical_appoinment.user_id]', backref='patient')


    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "password": self.password,
            "profile_information": self.profile_information,
            # do not serialize the password, its a security breach
        }
    
    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Role(db.Model):
    __tablename__ = 'roles'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    users = db.relationship('User',  backref="role")

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
        }
    
    def serializeTres(self):
        primer = self.serializetwo()
        primer["usuarios"] = list(map(lambda user: user.serializetwo(), self.users))
        return primer 
    


class Medical_file(db.Model):
    __tablename__ = 'medical_file'
    id = db.Column(db.Integer, primary_key=True)
    user_id=db.Column(db.Integer, db.ForeignKey('user.id'), primary_key=True)
    file = db.Column(db.String(150), nullable=False)
    date = db.Column(db.DateTime(), default=db.func.now(), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "file": self.file,
            "users_to_id": self.users_to_id,
            "date": self.date,
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Medical_record(db.Model):
    __tablename__ = 'medical_record'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    full_name = db.Column(db.String(150), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    identity_card = db.Column(db.Integer, nullable=False)
    adress = db.Column(db.String(200), nullable=False)
    phone_number =db.Column(db.Integer, nullable=False)
    reason_for_consultation = db.Column(db.String(200), nullable=False)
    current_illness = db.Column(db.String(200), nullable=False)
    criminal_record = db.Column(db.String(200), nullable=False)
    family_history = db.Column(db.String(200), nullable=False)
    surgical_history = db.Column(db.String(200), nullable=False)
    physical_examination = db.Column(db.String(500), nullable=False)
    diagnosis = db.Column(db.String(200), nullable=False)
    treatment = db.Column(db.String(200), nullable=False)
    observations = db.Column(db.String(200), nullable=False)
    date = db.Column(db.DateTime(), default=db.func.now(), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "full_name": self.full_name,
            "age": self.age,
            "identity_card": self.identity_card,
            "adress": self.adress,
            "phone_number": self.phone_number,
            "reason_for_consultation": self.reason_for_consultation,
            "current_illness": self.current_illness,
            "criminal_record": self.criminal_record,
            "family_history": self.family_history,
            "surgical_history": self.surgical_history,
            "physical_examination": self.physical_examination,
            "diagnosis": self.diagnosis,
            "treatment": self.treatment,
            "observations": self.observations,
            "date": self.date,
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Medical_appoinment(db.Model):
    __tablename__ = 'medical_appoinment'
    id = db.Column(db.Integer, primary_key=True)
    user_id=db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    doctor_id=db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    file = db.Column(db.String(150), nullable=False)
    comment = db.Column(db.String(500), nullable=False)
    date = db.Column(db.DateTime(), default=db.func.now(), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "doctor_id": self.doctor_id,
            "file": self.file,
            "comment": self.comment,
            "date": self.date,
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()