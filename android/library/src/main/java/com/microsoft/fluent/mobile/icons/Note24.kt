package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Note24: ImageVector
  get() {
    if (_note24 != null) {
      return _note24!!
    }
    _note24 = fluentIcon(name = "Regular.Note24", 24f) {
      materialPath {
          moveTo(17.75F, 3.0F)
          curveTo(19.545F, 3.0F, 21.0F, 4.455F, 21.0F, 6.25F)
          verticalLineToRelative(6.879F)
          curveToRelative(0.0F, 0.596F, -0.237F, 1.169F, -0.659F, 1.59F)
          lineToRelative(-5.621F, 5.622F)
          curveTo(14.298F, 20.763F, 13.725F, 21.0F, 13.129F, 21.0F)
          horizontalLineTo(6.25F)
          curveTo(4.455F, 21.0F, 3.0F, 19.545F, 3.0F, 17.75F)
          verticalLineTo(6.25F)
          curveTo(3.0F, 4.455F, 4.455F, 3.0F, 6.25F, 3.0F)
          horizontalLineToRelative(11.5F)
          close()
          moveToRelative(0.0F, 1.5F)
          horizontalLineTo(6.25F)
          curveTo(5.284F, 4.5F, 4.5F, 5.284F, 4.5F, 6.25F)
          verticalLineToRelative(11.5F)
          curveToRelative(0.0F, 0.966F, 0.784F, 1.75F, 1.75F, 1.75F)
          horizontalLineTo(13.0F)
          verticalLineToRelative(-3.25F)
          curveToRelative(0.0F, -1.733F, 1.357F, -3.15F, 3.066F, -3.245F)
          lineTo(16.25F, 13.0F)
          horizontalLineToRelative(3.25F)
          verticalLineTo(6.25F)
          curveToRelative(0.0F, -0.966F, -0.784F, -1.75F, -1.75F, -1.75F)
          close()
          moveToRelative(0.689F, 10.0F)
          horizontalLineTo(16.25F)
          curveToRelative(-0.918F, 0.0F, -1.671F, 0.707F, -1.744F, 1.607F)
          lineTo(14.5F, 16.25F)
          verticalLineToRelative(2.189F)
          lineToRelative(3.939F, -3.939F)
          close()        
      }
    }
    return _note24!!
  }

private var _note24: ImageVector? = null
