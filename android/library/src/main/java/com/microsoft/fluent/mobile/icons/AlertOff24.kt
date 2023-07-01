package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AlertOff24: ImageVector
  get() {
    if (_alertOff24 != null) {
      return _alertOff24!!
    }
    _alertOff24 = fluentIcon(name = "Filled.AlertOff24", 24f) {
      materialPath {
          moveTo(3.28F, 2.22F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(3.004F, 3.005F)
          curveToRelative(-0.429F, 0.9F, -0.683F, 1.9F, -0.72F, 2.956F)
          lineTo(4.5F, 9.491F)
          verticalLineToRelative(4.012F)
          lineToRelative(-1.415F, 3.16F)
          curveToRelative(-0.214F, 0.48F, 0.0F, 1.041F, 0.479F, 1.256F)
          curveTo(3.686F, 17.973F, 3.818F, 18.0F, 3.952F, 18.0F)
          horizontalLineToRelative(12.989F)
          lineToRelative(3.778F, 3.78F)
          curveToRelative(0.293F, 0.292F, 0.768F, 0.292F, 1.061F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.768F, 0.0F, -1.061F)
          lineTo(3.28F, 2.22F)
          close()
          moveToRelative(17.722F, 14.832F)
          curveToRelative(0.0F, 0.216F, -0.072F, 0.415F, -0.194F, 0.574F)
          lineTo(7.051F, 3.87F)
          curveTo(8.373F, 2.707F, 10.106F, 2.004F, 12.0F, 2.004F)
          curveToRelative(4.142F, 0.0F, 7.5F, 3.358F, 7.5F, 7.5F)
          verticalLineToRelative(3.998F)
          lineToRelative(1.418F, 3.16F)
          curveToRelative(0.055F, 0.123F, 0.084F, 0.255F, 0.084F, 0.39F)
          close()
          moveToRelative(-6.044F, 1.951F)
          curveToRelative(-0.238F, 1.418F, -1.472F, 2.498F, -2.958F, 2.498F)
          curveToRelative(-1.486F, 0.0F, -2.72F, -1.08F, -2.958F, -2.498F)
          horizontalLineToRelative(5.916F)
          close()        
      }
    }
    return _alertOff24!!
  }

private var _alertOff24: ImageVector? = null
