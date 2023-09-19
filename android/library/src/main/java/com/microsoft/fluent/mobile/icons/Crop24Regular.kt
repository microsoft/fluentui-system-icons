package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Crop24: ImageVector
  get() {
    if (_crop24 != null) {
      return _crop24!!
    }
    _crop24 = fluentIcon(name = "Regular.Crop24", 24f) {
      materialPath {
          moveTo(21.25F, 17.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          curveToRelative(0.0F, 0.38F, -0.282F, 0.694F, -0.648F, 0.743F)
          lineTo(21.25F, 18.5F)
          horizontalLineTo(18.5F)
          verticalLineToRelative(2.75F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          curveToRelative(-0.38F, 0.0F, -0.694F, -0.282F, -0.743F, -0.648F)
          lineTo(17.0F, 21.25F)
          verticalLineTo(18.5F)
          horizontalLineTo(8.75F)
          curveToRelative(-1.733F, 0.0F, -3.15F, -1.357F, -3.245F, -3.066F)
          lineTo(5.5F, 15.25F)
          lineTo(5.499F, 7.0F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 7.0F, 2.0F, 6.664F, 2.0F, 6.25F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.694F, 0.648F, -0.743F)
          lineTo(2.75F, 5.5F)
          horizontalLineToRelative(2.749F)
          lineTo(5.5F, 2.75F)
          curveTo(5.5F, 2.336F, 5.836F, 2.0F, 6.25F, 2.0F)
          curveToRelative(0.38F, 0.0F, 0.694F, 0.282F, 0.743F, 0.648F)
          lineTo(7.0F, 2.75F)
          lineTo(6.999F, 5.5F)
          horizontalLineTo(7.0F)
          verticalLineTo(7.0F)
          horizontalLineTo(6.999F)
          lineTo(7.0F, 15.25F)
          curveToRelative(0.0F, 0.918F, 0.707F, 1.671F, 1.607F, 1.744F)
          lineTo(8.75F, 17.0F)
          horizontalLineToRelative(12.5F)
          close()
          moveTo(8.0F, 5.5F)
          horizontalLineToRelative(7.25F)
          curveToRelative(1.733F, 0.0F, 3.15F, 1.356F, 3.245F, 3.066F)
          lineTo(18.5F, 8.75F)
          verticalLineTo(16.0F)
          horizontalLineTo(17.0F)
          verticalLineTo(8.75F)
          curveToRelative(0.0F, -0.918F, -0.707F, -1.671F, -1.607F, -1.744F)
          lineTo(15.25F, 7.0F)
          horizontalLineTo(8.0F)
          verticalLineTo(5.5F)
          close()        
      }
    }
    return _crop24!!
  }

private var _crop24: ImageVector? = null
