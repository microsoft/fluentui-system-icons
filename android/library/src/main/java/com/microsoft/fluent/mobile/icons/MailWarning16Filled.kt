package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MailWarning16: ImageVector
  get() {
    if (_mailWarning16 != null) {
      return _mailWarning16!!
    }
    _mailWarning16 = fluentIcon(name = "Filled.MailWarning16", 16f) {
      materialPath {
          moveTo(5.079F, 10.533F)
          curveTo(5.309F, 11.351F, 6.05F, 12.0F, 7.009F, 12.0F)
          horizontalLineTo(13.0F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(3.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(8.337F)
          lineToRelative(4.079F, 2.196F)
          close()
          moveTo(7.269F, 5.0F)
          lineToRelative(-2.05F, 4.104F)
          curveToRelative(-0.05F, 0.1F, -0.091F, 0.201F, -0.123F, 0.303F)
          lineTo(1.0F, 7.2F)
          verticalLineTo(7.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(4.268F)
          close()
          moveTo(6.106F, 9.552F)
          lineToRelative(3.496F, -6.998F)
          curveToRelative(0.369F, -0.738F, 1.422F, -0.739F, 1.79F, 0.0F)
          lineToRelative(3.5F, 6.998F)
          curveTo(15.226F, 10.217F, 14.742F, 11.0F, 13.998F, 11.0F)
          horizontalLineTo(7.002F)
          curveToRelative(-0.744F, 0.0F, -1.228F, -0.783F, -0.895F, -1.448F)
          close()
          moveToRelative(4.39F, -5.557F)
          curveToRelative(-0.275F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          verticalLineToRelative(3.002F)
          curveToRelative(0.0F, 0.277F, 0.225F, 0.5F, 0.5F, 0.5F)
          curveToRelative(0.277F, 0.0F, 0.501F, -0.223F, 0.501F, -0.5F)
          verticalLineTo(4.495F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          close()
          moveToRelative(0.501F, 5.504F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          reflectiveCurveToRelative(-0.5F, 0.224F, -0.5F, 0.5F)
          reflectiveCurveToRelative(0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          close()        
      }
    }
    return _mailWarning16!!
  }

private var _mailWarning16: ImageVector? = null
