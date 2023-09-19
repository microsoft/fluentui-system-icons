package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Lightbulb32: ImageVector
  get() {
    if (_lightbulb32 != null) {
      return _lightbulb32!!
    }
    _lightbulb32 = fluentIcon(name = "Regular.Lightbulb32", 32f) {
      materialPath {
          moveTo(8.0F, 12.0F)
          curveToRelative(0.0F, -4.418F, 3.582F, -8.0F, 8.0F, -8.0F)
          reflectiveCurveToRelative(8.0F, 3.582F, 8.0F, 8.0F)
          curveToRelative(0.0F, 2.382F, -1.04F, 4.519F, -2.692F, 5.986F)
          curveToRelative(-0.568F, 0.504F, -1.067F, 1.188F, -1.262F, 2.033F)
          lineTo(19.358F, 23.0F)
          horizontalLineToRelative(-6.716F)
          lineToRelative(-0.688F, -2.981F)
          curveToRelative(-0.195F, -0.845F, -0.694F, -1.53F, -1.262F, -2.033F)
          curveTo(9.04F, 16.519F, 8.0F, 14.382F, 8.0F, 12.0F)
          close()
          moveToRelative(5.103F, 13.0F)
          horizontalLineToRelative(5.794F)
          lineToRelative(-0.424F, 1.837F)
          curveTo(18.316F, 27.517F, 17.71F, 28.0F, 17.01F, 28.0F)
          horizontalLineToRelative(-2.02F)
          curveToRelative(-0.699F, 0.0F, -1.305F, -0.482F, -1.462F, -1.163F)
          lineTo(13.103F, 25.0F)
          close()
          moveTo(16.0F, 2.0F)
          curveTo(10.477F, 2.0F, 6.0F, 6.477F, 6.0F, 12.0F)
          curveToRelative(0.0F, 2.977F, 1.302F, 5.651F, 3.365F, 7.482F)
          curveToRelative(0.343F, 0.304F, 0.561F, 0.645F, 0.64F, 0.986F)
          lineToRelative(1.573F, 6.819F)
          curveTo(11.945F, 28.875F, 13.36F, 30.0F, 14.988F, 30.0F)
          horizontalLineToRelative(2.023F)
          curveToRelative(1.63F, 0.0F, 3.044F, -1.125F, 3.41F, -2.713F)
          lineToRelative(1.574F, -6.819F)
          curveToRelative(0.079F, -0.34F, 0.297F, -0.682F, 0.64F, -0.986F)
          curveTo(24.698F, 17.652F, 26.0F, 14.977F, 26.0F, 12.0F)
          curveToRelative(0.0F, -5.523F, -4.477F, -10.0F, -10.0F, -10.0F)
          close()        
      }
    }
    return _lightbulb32!!
  }

private var _lightbulb32: ImageVector? = null
