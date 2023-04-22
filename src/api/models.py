from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()



class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    profile_information = db.Column(db.String(200), nullable=False)
    profile_picture = db.Column(db.String(150), nullable=False)
    roles_id = db.Column(db.Integer, db.ForeignKey('roles.id'), nullable =False)
    roles = db.relationship('Role',  backref="user")
    medical_record = db.relationship('Medical_record',  backref="user", uselist = False)
    medical_appoinment = db.relationship('Medical_appoinment')

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Role(db.Model):
    __tablename__ = 'roles'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)

class Medical_file(db.Model):
    __tablename__ = 'medical_file'
    id = db.Column(db.Integer, primary_key=True)
    user_id=db.Column(db.Integer, db.ForeignKey('user.id'), primary_key=True)
    file = db.Column(db.String(150), nullable=False)
    date = db.Column(db.DateTime(), default=db.func.now(), nullable=False)

class Medical_record(db.Model):
    __tablename__ = 'medical_record'
    id = db.Column(db.Integer, primary_key=True)
    user_id=db.Column(db.Integer, db.ForeignKey('user.id'))
    full_name = db.Column(db.String(150), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    identity_card: db.Column(db.Integer, nullable=False)
    adress: db.Column(db.String(200), nullable=False)
    phone_number:db.Column(db.Integer, nullable=False)
    reason_for_consultation: db.Column(db.String(200), nullable=False)
    current_illness: db.Column(db.String(200), nullable=False)
    criminal_record: db.Column(db.String(200), nullable=False)
    family_history: db.Column(db.String(200), nullable=False)
    surgical_history: db.Column(db.String(200), nullable=False)
    physical_examination: db.Column(db.String(500), nullable=False)
    diagnosis: db.Column(db.String(200), nullable=False)
    treatment: db.Column(db.String(200), nullable=False)
    observations: db.Column(db.String(200), nullable=False)
    date = db.Column(db.DateTime(), default=db.func.now(), nullable=False)

class Medical_appoinment(db.Model):
    __tablename__ = 'medical_appoinment'
    id = db.Column(db.Integer, primary_key=True)
    user_id=db.Column(db.Integer, db.ForeignKey('user.id'))
    doctor_id=db.Column(db.Integer, db.ForeignKey('user.id'))
    file = db.Column(db.String(150), nullable=False)
    comment = db.Column(db.String(500), nullable=False)
    date = db.Column(db.DateTime(), default=db.func.now(), nullable=False)