package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowDownload24: ImageVector
  get() {
    if (_arrowDownload24 != null) {
      return _arrowDownload24!!
    }
    _arrowDownload24 = fluentIcon(name = "Regular.ArrowDownload24", 24f) {
      materialPath {
          moveTo(18.25F, 20.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.337F, 0.75F, 0.75F)
          curveToRelative(0.0F, 0.415F, -0.336F, 0.75F, -0.75F, 0.75F)
          lineToRelative(-13.0F, 0.005F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          reflectiveCurveToRelative(0.336F, -0.75F, 0.75F, -0.75F)
          lineToRelative(13.0F, -0.004F)
          close()
          moveTo(11.648F, 2.014F)
          lineToRelative(0.102F, -0.007F)
          curveToRelative(0.38F, 0.0F, 0.694F, 0.282F, 0.743F, 0.648F)
          lineTo(12.5F, 2.756F)
          lineTo(12.499F, 16.44F)
          lineToRelative(3.722F, -3.72F)
          curveToRelative(0.266F, -0.267F, 0.683F, -0.29F, 0.976F, -0.073F)
          lineToRelative(0.085F, 0.073F)
          curveToRelative(0.266F, 0.266F, 0.29F, 0.683F, 0.072F, 0.976F)
          lineToRelative(-0.073F, 0.084F)
          lineToRelative(-4.997F, 4.997F)
          curveToRelative(-0.266F, 0.266F, -0.683F, 0.29F, -0.976F, 0.073F)
          lineToRelative(-0.085F, -0.073F)
          lineToRelative(-5.003F, -4.996F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.768F, 0.0F, -1.061F)
          curveToRelative(0.265F, -0.267F, 0.682F, -0.291F, 0.976F, -0.073F)
          lineTo(7.28F, 12.72F)
          lineToRelative(3.719F, 3.714F)
          lineTo(11.0F, 2.756F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.694F, 0.648F, -0.743F)
          lineToRelative(0.102F, -0.007F)
          lineToRelative(-0.102F, 0.007F)
          close()        
      }
    }
    return _arrowDownload24!!
  }

private var _arrowDownload24: ImageVector? = null
