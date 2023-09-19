package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Pin16: ImageVector
  get() {
    if (_pin16 != null) {
      return _pin16!!
    }
    _pin16 = fluentIcon(name = "Regular.Pin16", 16f) {
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
          lineToRelative(0.854F, -0.146F)
          lineTo(5.5F, 11.207F)
          lineToRelative(2.146F, 2.147F)
          curveToRelative(0.123F, 0.122F, 0.3F, 0.173F, 0.469F, 0.133F)
          curveToRelative(0.168F, -0.04F, 0.304F, -0.164F, 0.36F, -0.329F)
          lineToRelative(0.936F, -2.81F)
          lineToRelative(3.779F, -2.024F)
          curveToRelative(0.886F, -0.474F, 1.064F, -1.669F, 0.354F, -2.38F)
          lineToRelative(-3.484F, -3.5F)
          close()
          moveTo(8.555F, 3.27F)
          curveToRelative(0.158F, -0.298F, 0.558F, -0.357F, 0.796F, -0.12F)
          lineToRelative(3.485F, 3.498F)
          curveToRelative(0.236F, 0.237F, 0.177F, 0.636F, -0.118F, 0.794F)
          lineTo(8.764F, 9.56F)
          curveTo(8.651F, 9.62F, 8.566F, 9.72F, 8.526F, 9.841F)
          lineToRelative(-0.744F, 2.233F)
          lineToRelative(-3.856F, -3.856F)
          lineToRelative(2.232F, -0.744F)
          curveToRelative(0.122F, -0.04F, 0.223F, -0.127F, 0.283F, -0.24F)
          lineTo(8.555F, 3.27F)
          close()        
      }
    }
    return _pin16!!
  }

private var _pin16: ImageVector? = null
