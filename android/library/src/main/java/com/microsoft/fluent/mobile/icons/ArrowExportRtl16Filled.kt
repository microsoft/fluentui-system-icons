package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowExportRtl16: ImageVector
  get() {
    if (_arrowExportRtl16 != null) {
      return _arrowExportRtl16!!
    }
    _arrowExportRtl16 = fluentIcon(name = "Filled.ArrowExportRtl16", 16f) {
      materialPath {
          moveTo(14.25F, 3.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          verticalLineToRelative(8.5F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveTo(15.0F, 12.664F, 15.0F, 12.25F)
          verticalLineToRelative(-8.5F)
          curveTo(15.0F, 3.336F, 14.664F, 3.0F, 14.25F, 3.0F)
          close()
          moveTo(5.78F, 3.72F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-3.5F, 3.5F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(3.5F, 3.5F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(3.56F, 8.5F)
          horizontalLineToRelative(7.69F)
          curveTo(11.664F, 8.5F, 12.0F, 8.164F, 12.0F, 7.75F)
          reflectiveCurveTo(11.664F, 7.0F, 11.25F, 7.0F)
          horizontalLineTo(3.56F)
          lineToRelative(2.22F, -2.22F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          close()        
      }
    }
    return _arrowExportRtl16!!
  }

private var _arrowExportRtl16: ImageVector? = null
