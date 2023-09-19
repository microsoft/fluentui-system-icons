package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ImageMultiple24: ImageVector
  get() {
    if (_imageMultiple24 != null) {
      return _imageMultiple24!!
    }
    _imageMultiple24 = fluentIcon(name = "Filled.ImageMultiple24", 24f) {
      materialPath {
          moveTo(3.0F, 6.25F)
          curveTo(3.0F, 4.455F, 4.455F, 3.0F, 6.25F, 3.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(1.795F, 0.0F, 3.25F, 1.455F, 3.25F, 3.25F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 0.646F, -0.189F, 1.248F, -0.514F, 1.755F)
          lineToRelative(-5.692F, -5.376F)
          curveToRelative(-0.867F, -0.819F, -2.223F, -0.819F, -3.09F, 0.0F)
          lineToRelative(-5.69F, 5.375F)
          curveTo(3.187F, 16.498F, 3.0F, 15.896F, 3.0F, 15.25F)
          verticalLineToRelative(-9.0F)
          close()
          moveToRelative(10.747F, 2.746F)
          curveToRelative(0.69F, 0.0F, 1.248F, -0.559F, 1.248F, -1.248F)
          curveToRelative(0.0F, -0.69F, -0.558F, -1.248F, -1.248F, -1.248F)
          reflectiveCurveTo(12.5F, 7.059F, 12.5F, 7.748F)
          curveToRelative(0.0F, 0.69F, 0.559F, 1.248F, 1.248F, 1.248F)
          close()
          moveToRelative(-2.483F, 3.724F)
          lineToRelative(5.642F, 5.327F)
          curveTo(16.42F, 18.335F, 15.855F, 18.5F, 15.25F, 18.5F)
          horizontalLineToRelative(-9.0F)
          curveToRelative(-0.605F, 0.0F, -1.171F, -0.165F, -1.657F, -0.453F)
          lineToRelative(5.641F, -5.327F)
          curveToRelative(0.29F, -0.273F, 0.741F, -0.273F, 1.03F, 0.0F)
          close()
          moveTo(8.75F, 21.0F)
          curveToRelative(-1.15F, 0.0F, -2.162F, -0.598F, -2.74F, -1.5F)
          horizontalLineToRelative(9.74F)
          curveToRelative(2.071F, 0.0F, 3.75F, -1.679F, 3.75F, -3.75F)
          verticalLineTo(6.011F)
          curveTo(20.402F, 6.589F, 21.0F, 7.6F, 21.0F, 8.751F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 2.899F, -2.35F, 5.25F, -5.25F, 5.25F)
          horizontalLineToRelative(-7.0F)
          close()        
      }
    }
    return _imageMultiple24!!
  }

private var _imageMultiple24: ImageVector? = null
