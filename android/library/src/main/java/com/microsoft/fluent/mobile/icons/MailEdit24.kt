package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MailEdit24: ImageVector
  get() {
    if (_mailEdit24 != null) {
      return _mailEdit24!!
    }
    _mailEdit24 = fluentIcon(name = "Filled.MailEdit24", 24f) {
      materialPath {
          moveTo(22.0F, 11.26F)
          verticalLineTo(7.608F)
          lineToRelative(-9.652F, 5.056F)
          curveToRelative(-0.218F, 0.114F, -0.478F, 0.114F, -0.696F, 0.0F)
          lineTo(2.0F, 7.608F)
          verticalLineToRelative(8.142F)
          lineToRelative(0.005F, 0.184F)
          curveTo(2.101F, 17.644F, 3.517F, 19.0F, 5.25F, 19.0F)
          horizontalLineToRelative(6.467F)
          curveToRelative(0.184F, -0.422F, 0.445F, -0.807F, 0.773F, -1.135F)
          lineToRelative(5.903F, -5.903F)
          curveToRelative(0.975F, -0.975F, 2.41F, -1.209F, 3.607F, -0.702F)
          close()
          moveTo(18.75F, 3.0F)
          horizontalLineTo(5.25F)
          lineTo(5.064F, 3.005F)
          curveToRelative(-1.6F, 0.09F, -2.89F, 1.338F, -3.048F, 2.919F)
          lineTo(12.0F, 11.154F)
          lineToRelative(9.984F, -5.23F)
          curveTo(21.82F, 4.282F, 20.434F, 3.0F, 18.75F, 3.0F)
          close()
          moveToRelative(0.35F, 9.67F)
          lineToRelative(-5.903F, 5.902F)
          curveToRelative(-0.344F, 0.344F, -0.588F, 0.775F, -0.706F, 1.247F)
          lineToRelative(-0.458F, 1.831F)
          curveToRelative(-0.199F, 0.796F, 0.523F, 1.517F, 1.319F, 1.318F)
          lineToRelative(1.83F, -0.457F)
          curveToRelative(0.473F, -0.118F, 0.904F, -0.363F, 1.248F, -0.707F)
          lineToRelative(5.902F, -5.902F)
          curveToRelative(0.893F, -0.893F, 0.893F, -2.34F, 0.0F, -3.232F)
          curveToRelative(-0.892F, -0.893F, -2.34F, -0.893F, -3.232F, 0.0F)
          close()        
      }
    }
    return _mailEdit24!!
  }

private var _mailEdit24: ImageVector? = null
