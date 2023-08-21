using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace Assingment_01_practics
{
    public partial class frm_login : Form
    {
        public frm_login()
        {
            InitializeComponent();
        }

        private void btn_Save_Click(object sender, EventArgs e)
        {
           if(( tb_Username.Text=="a" && tb_password.Text=="as") || (tb_Username.Text== "s" && tb_password.Text=="as"))
           {
               MessageBox.Show("Login Successfully...", "Good", MessageBoxButtons.OK, MessageBoxIcon.Information);
               frm_Add_Student obj = new frm_Add_Student();
               obj.Show();
               this.Hide();

            }

       }

        private void lbl_Note_Click(object sender, EventArgs e)
        {
            lbl_Note.Text = " Enter your Username And Password";
        }

        private void frm_login_Load(object sender, EventArgs e)
        {

        }

        
    }
}
