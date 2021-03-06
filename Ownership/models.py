from django.db import models
from Inventory.models import Computer, Server, System, Email, Software
from django.contrib.auth.models import User


# Create your models here.


class Department(models.Model):
    departmentName = models.CharField(max_length=250)
    computer = models.ForeignKey(Computer, max_length=20, null=True, default=None, blank=True, on_delete=models.SET_NULL)
    server = models.ForeignKey(Server, max_length=20, null=True, default=None, blank=True, on_delete=models.SET_NULL)


class Staff(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    staffID = models.CharField(max_length=20, null=True, default=None, blank=True)
    staffName = models.CharField(max_length=250)
    position = models.CharField(max_length=250)
    location = models.CharField(max_length=250)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    computer = models.ForeignKey(Computer, on_delete=models.SET_NULL, null=True, default=None, blank=True)
    system = models.ForeignKey(System, on_delete=models.SET_NULL, null=True, default=None, blank=True)
    email = models.ForeignKey(Email, on_delete=models.SET_NULL, null=True, default=None, blank=True)


class Tenant(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    tenantName = models.CharField(max_length=250)
    computer = models.ForeignKey(Computer, on_delete=models.SET_NULL, null=True, default=None, blank=True)


class Project(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    projectName = models.CharField(max_length=250)
    computer = models.ForeignKey(Computer, on_delete=models.SET_NULL, null=True, default=None, blank=True)


class SoftwareOwnership(models.Model):
    staff = models.ForeignKey(Staff, on_delete=models.CASCADE, null=True, default=None, blank=True)
    software = models.ForeignKey(Software, on_delete=models.CASCADE, null=True, default=None, blank=True)







