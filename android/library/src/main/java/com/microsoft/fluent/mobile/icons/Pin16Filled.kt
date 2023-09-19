package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Pin16: ImageVector
  get() {
    if (_pin16 != null) {
      return _pin16!!
    }
    _pin16 = fluentIcon(name = "Filled.Pin16", 16f) {
      materialPath {
          moveTo(10.059F, 2.445F)
          curveTo(9.347F, 1.731F, 8.147F, 1.91F, 7.673F, 2.8F)
          lineToRelative(-2.02F, 3.79F)
          lineToRelative(-2.811F, 0.937F)
          curveToRelative(-0.164F, 0.055F, -0.289F, 0.19F, -0.329F, 0.36F)
          curveToRelative(-0.04F, 0.168F, 0.01F, 0.345F, 0.134F, 0.468F)
          lineTo(4.793F, 10.5F)
          lineToRelative(-2.647F, 2.647F)
          lineTo(2.0F, 14.0F)
          lineToRelative(0.853F, -0.146F)
          lineTo(5.5F, 11.207F)
          lineToRelative(2.146F, 2.147F)
          curveToRelative(0.123F, 0.122F, 0.3F, 0.173F, 0.469F, 0.133F)
          curveToRelative(0.168F, -0.04F, 0.304F, -0.164F, 0.36F, -0.329F)
          lineToRelative(0.936F, -2.81F)
          lineToRelative(3.779F, -2.024F)
          curveToRelative(0.886F, -0.474F, 1.064F, -1.669F, 0.354F, -2.38F)
          lineToRelative(-3.484F, -3.5F)
          close()        
      }
    }
    return _pin16!!
  }

private var _pin16: ImageVector? = null
