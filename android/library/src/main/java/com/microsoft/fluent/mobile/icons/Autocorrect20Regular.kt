package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Autocorrect20: ImageVector
  get() {
    if (_autocorrect20 != null) {
      return _autocorrect20!!
    }
    _autocorrect20 = fluentIcon(name = "Regular.Autocorrect20", 20f) {
      materialPath {
          moveTo(9.145F, 5.484F)
          curveToRelative(0.389F, -0.643F, 1.322F, -0.643F, 1.71F, 0.0F)
          lineToRelative(2.128F, 3.517F)
          horizontalLineTo(12.5F)
          curveToRelative(-0.023F, 0.0F, -0.045F, 0.001F, -0.067F, 0.004F)
          curveToRelative(-0.06F, -0.003F, -0.121F, -0.004F, -0.183F, -0.004F)
          curveTo(10.18F, 9.0F, 8.5F, 10.68F, 8.5F, 12.75F)
          curveToRelative(0.0F, 2.07F, 1.679F, 3.75F, 3.75F, 3.75F)
          curveToRelative(2.071F, 0.0F, 3.75F, -1.68F, 3.75F, -3.75F)
          curveToRelative(0.0F, -1.087F, -0.462F, -2.066F, -1.2F, -2.75F)
          horizontalLineToRelative(2.7F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(17.776F, 9.0F, 17.5F, 9.0F)
          horizontalLineToRelative(-3.348F)
          lineToRelative(-2.44F, -4.034F)
          curveToRelative(-0.779F, -1.287F, -2.645F, -1.287F, -3.423F, 0.0F)
          lineTo(2.072F, 15.242F)
          curveToRelative(-0.143F, 0.236F, -0.067F, 0.544F, 0.17F, 0.687F)
          curveToRelative(0.236F, 0.143F, 0.543F, 0.067F, 0.686F, -0.17F)
          lineTo(9.145F, 5.485F)
          close()
          moveToRelative(3.105F, 4.517F)
          curveTo(13.77F, 10.0F, 15.0F, 11.23F, 15.0F, 12.75F)
          curveToRelative(0.0F, 1.518F, -1.231F, 2.75F, -2.75F, 2.75F)
          reflectiveCurveTo(9.5F, 14.269F, 9.5F, 12.75F)
          curveToRelative(0.0F, -1.52F, 1.231F, -2.75F, 2.75F, -2.75F)
          close()        
      }
    }
    return _autocorrect20!!
  }

private var _autocorrect20: ImageVector? = null
