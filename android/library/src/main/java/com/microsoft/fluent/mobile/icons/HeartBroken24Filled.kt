package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.HeartBroken24: ImageVector
  get() {
    if (_heartBroken24 != null) {
      return _heartBroken24!!
    }
    _heartBroken24 = fluentIcon(name = "Filled.HeartBroken24", 24f) {
      materialPath {
          moveTo(11.28F, 5.035F)
          lineTo(11.177F, 4.93F)
          curveToRelative(-2.1F, -2.1F, -5.502F, -2.1F, -7.601F, 0.0F)
          curveToRelative(-2.1F, 2.099F, -2.1F, 5.502F, 0.0F, 7.601F)
          lineToRelative(7.895F, 7.896F)
          curveToRelative(0.293F, 0.293F, 0.768F, 0.293F, 1.06F, 0.0F)
          lineToRelative(7.902F, -7.897F)
          curveToRelative(2.094F, -2.106F, 2.098F, -5.5F, -0.001F, -7.6F)
          curveToRelative(-2.103F, -2.102F, -5.508F, -2.102F, -7.611F, 0.0F)
          lineTo(12.03F, 5.722F)
          lineToRelative(-1.88F, 3.032F)
          lineToRelative(3.68F, 3.22F)
          curveToRelative(0.104F, 0.092F, 0.166F, 0.222F, 0.17F, 0.36F)
          curveToRelative(0.005F, 0.139F, -0.048F, 0.273F, -0.145F, 0.37F)
          lineToRelative(-2.5F, 2.5F)
          curveToRelative(-0.196F, 0.196F, -0.512F, 0.196F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.195F, -0.195F, -0.511F, 0.0F, -0.707F)
          lineToRelative(2.122F, -2.122F)
          lineToRelative(-3.597F, -3.148F)
          curveToRelative(-0.184F, -0.16F, -0.225F, -0.432F, -0.096F, -0.64F)
          lineToRelative(2.206F, -3.552F)
          close()        
      }
    }
    return _heartBroken24!!
  }

private var _heartBroken24: ImageVector? = null
