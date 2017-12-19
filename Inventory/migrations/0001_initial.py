# Generated by Django 2.0 on 2017-12-13 07:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Ownership', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Computer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('computerModel', models.CharField(max_length=120)),
                ('pcTagNo', models.CharField(max_length=120)),
                ('pcName', models.CharField(max_length=120)),
                ('serialNo', models.CharField(max_length=120)),
                ('operatingSystem', models.CharField(max_length=120)),
                ('processor', models.CharField(max_length=120)),
                ('systemType', models.CharField(max_length=10)),
                ('ram', models.CharField(max_length=8)),
                ('hardDrive', models.CharField(max_length=10)),
                ('remarks', models.CharField(max_length=250)),
                ('department', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='Ownership.Department')),
                ('project', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='Ownership.Project')),
                ('staff', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='Ownership.Staff')),
                ('tenant', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='Ownership.Tenant')),
            ],
        ),
        migrations.CreateModel(
            name='DCAsset',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('equipment', models.CharField(max_length=120)),
                ('description', models.CharField(max_length=120)),
                ('serialNumber', models.CharField(max_length=120)),
            ],
        ),
        migrations.CreateModel(
            name='Email',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('licenses', models.CharField(max_length=120)),
                ('principalName', models.CharField(max_length=120)),
                ('dateCreated', models.CharField(max_length=120)),
                ('staff', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='Ownership.Staff')),
            ],
        ),
        migrations.CreateModel(
            name='Monitor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('serialNo', models.CharField(max_length=120)),
                ('tagNo', models.CharField(max_length=120)),
                ('age', models.CharField(max_length=3)),
                ('computer', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='Inventory.Computer')),
            ],
        ),
        migrations.CreateModel(
            name='Projector',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('projectorModel', models.CharField(max_length=120)),
                ('projectorYear', models.CharField(max_length=5)),
                ('projectorTag', models.CharField(max_length=120)),
                ('computer', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='Inventory.Computer')),
            ],
        ),
        migrations.CreateModel(
            name='Server',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hostname', models.CharField(max_length=120)),
                ('serverModel', models.CharField(max_length=120)),
                ('ipv4', models.CharField(max_length=15)),
                ('domain', models.CharField(max_length=120)),
                ('username', models.CharField(max_length=120)),
                ('password', models.CharField(max_length=120)),
                ('operatingSystem', models.CharField(max_length=120)),
                ('serialNumber', models.CharField(max_length=120)),
                ('productKey', models.CharField(max_length=250)),
                ('processor', models.CharField(max_length=120)),
                ('hardDrive', models.CharField(max_length=8)),
                ('application', models.CharField(max_length=120)),
                ('location', models.CharField(max_length=120)),
                ('department', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='Ownership.Department')),
            ],
        ),
        migrations.CreateModel(
            name='Software',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('softwareName', models.CharField(max_length=120)),
            ],
        ),
        migrations.CreateModel(
            name='SoftwareOwnership',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('software', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='Inventory.Software')),
                ('staff', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='Ownership.Staff')),
            ],
        ),
        migrations.CreateModel(
            name='System',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('systemName', models.CharField(max_length=120)),
                ('location', models.CharField(max_length=120)),
                ('staff', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='Ownership.Staff')),
            ],
        ),
    ]
