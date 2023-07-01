package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.MailRead20: ImageVector
  get() {
    if (_mailRead20 != null) {
      return _mailRead20!!
    }
    _mailRead20 = fluentIcon(name = "Regular.MailRead20", 20f) {
      materialPath {
          moveTo(9.743F, 3.071F)
          curveToRelative(0.158F, -0.095F, 0.356F, -0.095F, 0.514F, 0.0F)
          lineToRelative(6.772F, 4.063F)
          curveTo(17.631F, 7.496F, 18.0F, 8.147F, 18.0F, 8.85F)
          verticalLineToRelative(5.65F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-11.0F)
          curveTo(3.12F, 17.0F, 2.0F, 15.88F, 2.0F, 14.5F)
          verticalLineTo(8.85F)
          curveToRelative(0.0F, -0.703F, 0.369F, -1.354F, 0.971F, -1.716F)
          lineTo(3.184F, 7.49F)
          lineTo(2.97F, 7.134F)
          lineToRelative(6.772F, -4.063F)
          close()
          moveTo(10.0F, 4.083F)
          lineTo(3.486F, 7.992F)
          lineTo(3.472F, 8.0F)
          lineTo(10.0F, 11.917F)
          lineTo(16.528F, 8.0F)
          lineToRelative(-0.013F, -0.008F)
          lineTo(10.0F, 4.083F)
          close()
          moveToRelative(7.0F, 4.8F)
          lineToRelative(-6.743F, 4.046F)
          curveToRelative(-0.158F, 0.095F, -0.356F, 0.095F, -0.514F, 0.0F)
          lineTo(3.0F, 8.883F)
          verticalLineTo(14.5F)
          curveTo(3.0F, 15.328F, 3.672F, 16.0F, 4.5F, 16.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineTo(8.883F)
          close()        
      }
    }
    return _mailRead20!!
  }

private var _mailRead20: ImageVector? = null
