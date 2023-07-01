package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Pulse20: ImageVector
  get() {
    if (_pulse20 != null) {
      return _pulse20!!
    }
    _pulse20 = fluentIcon(name = "Regular.Pulse20", 20f) {
      materialPath {
          moveTo(7.004F, 3.0F)
          curveToRelative(0.225F, 0.002F, 0.42F, 0.153F, 0.479F, 0.37F)
          lineToRelative(3.043F, 11.303F)
          lineToRelative(2.495F, -8.317F)
          curveTo(13.083F, 6.151F, 13.27F, 6.008F, 13.483F, 6.0F)
          curveToRelative(0.215F, -0.007F, 0.41F, 0.123F, 0.485F, 0.324F)
          lineTo(15.347F, 10.0F)
          horizontalLineTo(17.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(17.776F, 11.0F, 17.5F, 11.0F)
          horizontalLineTo(15.0F)
          curveToRelative(-0.208F, 0.0F, -0.395F, -0.13F, -0.468F, -0.324F)
          lineToRelative(-0.98F, -2.611F)
          lineToRelative(-2.573F, 8.579F)
          curveToRelative(-0.064F, 0.214F, -0.263F, 0.36F, -0.486F, 0.356F)
          curveToRelative(-0.223F, -0.003F, -0.418F, -0.154F, -0.476F, -0.37F)
          lineTo(6.986F, 5.37F)
          lineTo(5.48F, 10.637F)
          curveTo(5.419F, 10.852F, 5.223F, 11.0F, 5.0F, 11.0F)
          horizontalLineTo(2.5F)
          curveTo(2.224F, 11.0F, 2.0F, 10.776F, 2.0F, 10.5F)
          reflectiveCurveTo(2.224F, 10.0F, 2.5F, 10.0F)
          horizontalLineToRelative(2.123F)
          lineToRelative(1.896F, -6.637F)
          curveTo(6.581F, 3.147F, 6.78F, 2.998F, 7.004F, 3.0F)
          close()        
      }
    }
    return _pulse20!!
  }

private var _pulse20: ImageVector? = null
