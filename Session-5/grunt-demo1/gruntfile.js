module.exports=function(grunt){
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        
        autoprefixer:{
            options:{
                browsers:['last 2 versions','ie 8','ie 9']
            },
            your_targets:{
                
            },
            copy:{
                src:'css/style.css',
                dest:'css/styleprefixed.css'
            }
        },
        watch:{
            files:'css/style.css',
            tasks:['autoprefixer']
        },
        cssmin:{
                target:{
                    files:{
                        'css/styleprefixed.min.css':['css/styleprefixed.css']
                    }
                }
        },
        uglify:{
            target:{
                files:{
                    'js/output.min.js':['js/*.js']
                }
            }
        },
        imagemin:{
            dynamic:{
                files:[{
                    expand:true,
                    cwd:'images/',
                    src:['**/*.{jpg,png,gif}'],
                    dest:'images/build'
                }]
            }
        },
        jshint:
        {   
            options: {
                
            "bitwise": true, 
            "camelcase": true, 
            "curly": true, 
            "latedef": true, 
            "newcap": true,     
            "nonew": true,          
            "undef": true, 
            "unused": true,     
            "esnext": true,     
            
            "sub": true,  
            "browser": true, 
            "node": true, 
            "jquery": true, 
            "devel": true, 
            "strict": true   
          },
          target:
          {
            src: ['js/**/*.js', '!js/output.min.js']
          }
        },
        concurrent:{
            target:{
                tasks:["watch","autoprefixer","imagemin"],
                opetions:{
                    logConcurrentOutput:true
                }
            }
        },
        qunit:{
            all:{
                options:{
                    urls:[
                        'http://localhost:8000'
                    ]
                }
            }
        },
        connect:{
            server:{
                options:{
                    port:8000,
                    base:'tests/',
                    keepalive:true
                     
                }
            }
        },
        behat:{
            test:{
                options:{
                    output:true,
                    failedOnUndefined:true,
                    failOnFailed:true
                },
                cmd:'node_modules/grunt-behat/bin',
                features:'features/',
                flags:'-f pretty'
            }
        },
        compress:{
            main:{
                options:{
                    archive:'site.zip'
                },
                files:[
                    {
                        expand:true,src:['css/*'],dest:'/'
                    }
                ]
            }
        },
        gitcommit:{
            task:{
                options:{
                    message:'Testing',
                    noVerify:true,
                    noStatus:false
                },
                files:{
                    src:['.']
                }
            }
        },
        githooks:{
            all:{
                'pre-commit':'test'
            }
        },
        rsync:{
            options:{
                exclude:[".git",".scss","node_modules"],
                reclusive:true
            }
        },
        prod:{
                options:{
                    src:'.',
                    dest:"grunt-demo1/prod",
                    host:""
                }
            
        }
 

    });
    
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //default task registers automatically
   // grunt.registerTask("default",['autoprefixer']);
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    //custom task register
    grunt.registerTask("MinifyNewImagest",['newer:imagemin']);
    grunt.registerTask("build",['cssmin','uglify','imagemin','compress'])
    
};


