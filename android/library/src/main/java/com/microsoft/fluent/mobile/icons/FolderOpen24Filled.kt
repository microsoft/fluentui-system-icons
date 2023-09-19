package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FolderOpen24: ImageVector
  get() {
    if (_folderOpen24 != null) {
      return _folderOpen24!!
    }
    _folderOpen24 = fluentIcon(name = "Filled.FolderOpen24", 24f) {
      materialPath {
          moveTo(2.0F, 6.25F)
          curveTo(2.0F, 5.006F, 3.008F, 4.0F, 4.25F, 4.0F)
          horizontalLineToRelative(3.956F)
          curveTo(8.73F, 4.0F, 9.24F, 4.184F, 9.644F, 4.52F)
          lineToRelative(2.381F, 1.98F)
          horizontalLineToRelative(5.725F)
          curveTo(18.993F, 6.5F, 20.0F, 7.507F, 20.0F, 8.75F)
          verticalLineToRelative(0.752F)
          horizontalLineTo(6.421F)
          curveToRelative(-1.032F, 0.0F, -1.932F, 0.703F, -2.183F, 1.705F)
          lineToRelative(-1.922F, 7.7F)
          curveToRelative(0.043F, -0.171F, 0.0F, 0.005F, 0.0F, 0.0F)
          curveToRelative(-0.203F, -0.338F, -0.32F, -0.734F, -0.32F, -1.158F)
          lineTo(2.0F, 6.25F)
          close()
          moveToRelative(1.745F, 13.129F)
          curveTo(3.666F, 19.695F, 3.905F, 20.0F, 4.23F, 20.0F)
          horizontalLineToRelative(14.24F)
          curveToRelative(0.803F, 0.0F, 1.503F, -0.547F, 1.698F, -1.326F)
          lineToRelative(1.763F, -7.05F)
          curveToRelative(0.079F, -0.316F, -0.16F, -0.622F, -0.485F, -0.622F)
          horizontalLineTo(6.42F)
          curveToRelative(-0.344F, 0.0F, -0.644F, 0.234F, -0.727F, 0.568F)
          lineToRelative(-1.948F, 7.81F)
          close()        
      }
    }
    return _folderOpen24!!
  }

private var _folderOpen24: ImageVector? = null
