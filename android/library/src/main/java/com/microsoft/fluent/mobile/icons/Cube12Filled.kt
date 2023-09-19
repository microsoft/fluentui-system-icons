package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Cube12: ImageVector
  get() {
    if (_cube12 != null) {
      return _cube12!!
    }
    _cube12 = fluentIcon(name = "Filled.Cube12", 12f) {
      materialPath {
          moveTo(6.427F, 2.066F)
          curveToRelative(-0.278F, -0.083F, -0.575F, -0.083F, -0.854F, 0.0F)
          lineToRelative(-2.858F, 0.85F)
          curveTo(2.291F, 3.04F, 2.0F, 3.43F, 2.0F, 3.873F)
          verticalLineToRelative(4.254F)
          curveTo(2.0F, 8.57F, 2.29F, 8.96F, 2.715F, 9.086F)
          lineToRelative(2.858F, 0.85F)
          curveToRelative(0.279F, 0.082F, 0.575F, 0.082F, 0.854F, 0.0F)
          lineToRelative(2.858F, -0.85F)
          curveTo(9.709F, 8.96F, 10.0F, 8.57F, 10.0F, 8.128F)
          verticalLineTo(3.874F)
          curveTo(10.0F, 3.43F, 9.71F, 3.04F, 9.285F, 2.915F)
          lineTo(6.427F, 2.066F)
          close()
          moveTo(4.026F, 4.843F)
          curveToRelative(0.087F, -0.262F, 0.37F, -0.404F, 0.632F, -0.316F)
          lineTo(6.0F, 4.974F)
          lineToRelative(1.342F, -0.447F)
          curveTo(7.604F, 4.439F, 7.887F, 4.58F, 7.974F, 4.843F)
          curveTo(8.062F, 5.105F, 7.92F, 5.388F, 7.658F, 5.475F)
          lineTo(6.5F, 5.861F)
          verticalLineToRelative(1.14F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(5.5F, 7.277F, 5.5F, 7.0F)
          verticalLineTo(5.86F)
          lineTo(4.342F, 5.475F)
          curveTo(4.08F, 5.388F, 3.938F, 5.105F, 4.026F, 4.843F)
          close()        
      }
    }
    return _cube12!!
  }

private var _cube12: ImageVector? = null
