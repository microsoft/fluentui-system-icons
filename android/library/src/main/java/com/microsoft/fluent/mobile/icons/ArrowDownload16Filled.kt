package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowDownload16: ImageVector
  get() {
    if (_arrowDownload16 != null) {
      return _arrowDownload16!!
    }
    _arrowDownload16 = fluentIcon(name = "Filled.ArrowDownload16", 16f) {
      materialPath {
          moveTo(3.5F, 13.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          curveToRelative(0.0F, 0.38F, -0.282F, 0.694F, -0.648F, 0.743F)
          lineTo(12.5F, 14.5F)
          horizontalLineToRelative(-9.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.694F, 0.648F, -0.743F)
          lineTo(3.5F, 13.0F)
          horizontalLineToRelative(9.0F)
          close()
          moveTo(7.898F, 1.007F)
          lineTo(8.0F, 1.0F)
          curveToRelative(0.38F, 0.0F, 0.694F, 0.282F, 0.743F, 0.648F)
          lineTo(8.75F, 1.75F)
          verticalLineToRelative(7.688F)
          lineToRelative(2.255F, -2.254F)
          curveToRelative(0.266F, -0.266F, 0.683F, -0.29F, 0.977F, -0.072F)
          lineToRelative(0.084F, 0.072F)
          curveToRelative(0.266F, 0.266F, 0.29F, 0.683F, 0.072F, 0.977F)
          lineToRelative(-0.072F, 0.084F)
          lineTo(8.53F, 11.78F)
          curveToRelative(-0.266F, 0.267F, -0.683F, 0.29F, -0.976F, 0.073F)
          lineTo(7.47F, 11.78F)
          lineTo(3.934F, 8.245F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.768F, 0.0F, -1.06F)
          curveTo(4.2F, 6.917F, 4.617F, 6.893F, 4.911F, 7.111F)
          lineToRelative(0.084F, 0.072F)
          lineTo(7.25F, 9.44F)
          verticalLineTo(1.75F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.694F, 0.648F, -0.743F)
          lineTo(8.0F, 1.0F)
          lineTo(7.898F, 1.007F)
          close()        
      }
    }
    return _arrowDownload16!!
  }

private var _arrowDownload16: ImageVector? = null
